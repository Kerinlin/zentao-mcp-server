import nock from "nock";
import { afterEach, describe, expect, it } from "vitest";
import { ZentaoApiV1Adapter } from "../src/adapters/zentaoApiV1.js";
import { AuthError, RemoteApiError } from "../src/errors.js";

async function loginAdapter(): Promise<ZentaoApiV1Adapter> {
  nock("https://zentao.example.com")
    .post("/tokens", { account: "alice", password: "pwd" })
    .reply(200, { token: "token-1" });

  const adapter = new ZentaoApiV1Adapter({
    baseURL: "https://zentao.example.com",
    timeoutMs: 3_000,
    retryCount: 1,
  });
  await adapter.login("alice", "pwd");
  return adapter;
}

describe("ZentaoApiV1Adapter", () => {
  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it("支持登录并查询我的 bug", async () => {
    const scope = nock("https://zentao.example.com")
      .post("/tokens", { account: "alice", password: "pwd" })
      .reply(200, { token: "token-1" })
      .get("/products")
      .matchHeader("token", "token-1")
      .reply(200, {
        page: 1,
        total: 1,
        limit: 100,
        products: [{ id: 1, name: "P1" }],
      })
      .get("/bugs")
      .query(
        (query) =>
          query.assignedTo === "me" &&
          query.status === "active" &&
          query.product === "1",
      )
      .matchHeader("token", "token-1")
      .reply(200, {
        page: 1,
        total: 1,
        limit: 100,
        bugs: [{ id: 1, title: "bug", status: "active" }],
      });

    const adapter = new ZentaoApiV1Adapter({
      baseURL: "https://zentao.example.com",
      timeoutMs: 3_000,
      retryCount: 1,
    });

    await adapter.login("alice", "pwd");
    const bugs = await adapter.getMyBugs({ status: "active" });

    expect(bugs).toHaveLength(1);
    expect(bugs[0]?.id).toBe(1);
    expect(scope.isDone()).toBe(true);
  });

  it("未登录时查询会抛出 AuthError", async () => {
    const adapter = new ZentaoApiV1Adapter({
      baseURL: "https://zentao.example.com",
      timeoutMs: 3_000,
      retryCount: 1,
    });

    await expect(adapter.getProducts()).rejects.toBeInstanceOf(AuthError);
  });

  it("解决 bug 使用 POST /bugs/:id/resolve（禅道 API v1）", async () => {
    const scope = nock("https://zentao.example.com")
      .post("/tokens", { account: "alice", password: "pwd" })
      .reply(200, { token: "token-1" })
      .post("/bugs/9/resolve", (body: Record<string, unknown>) => {
        return (
          body.resolution === "fixed" &&
          body.resolvedBuild === "trunk" &&
          typeof body.resolvedDate === "string" &&
          String(body.resolvedDate).includes(":")
        );
      })
      .reply(200, { id: 9, title: "t", status: "resolved" });

    const adapter = new ZentaoApiV1Adapter({
      baseURL: "https://zentao.example.com",
      timeoutMs: 3_000,
      retryCount: 1,
    });

    await adapter.login("alice", "pwd");
    const bug = await adapter.resolveBug(9, { resolution: "fixed" });
    expect(bug.status).toBe("resolved");
    expect(scope.isDone()).toBe(true);
  });

  it("fixed 方案忽略传入的 resolvedBuild，固定为 trunk", async () => {
    const scope = nock("https://zentao.example.com")
      .post("/tokens", { account: "alice", password: "pwd" })
      .reply(200, { token: "token-1" })
      .post("/bugs/8/resolve", (body: Record<string, unknown>) => {
        return body.resolution === "fixed" && body.resolvedBuild === "trunk";
      })
      .reply(200, { id: 8, title: "t", status: "resolved" });

    const adapter = new ZentaoApiV1Adapter({
      baseURL: "https://zentao.example.com",
      timeoutMs: 3_000,
      retryCount: 1,
    });

    await adapter.login("alice", "pwd");
    await adapter.resolveBug(8, { resolution: "fixed", resolvedBuild: "r1186" });
    expect(scope.isDone()).toBe(true);
  });

  it("激活 bug 使用 POST /bugs/:id/active", async () => {
    const scope = nock("https://zentao.example.com")
      .post("/tokens", { account: "alice", password: "pwd" })
      .reply(200, { token: "token-1" })
      .post("/bugs/11/active", (body: Record<string, unknown>) => {
        return (
          Array.isArray(body.openedBuild) &&
          body.openedBuild[0] === "trunk" &&
          body.comment === "重新打开"
        );
      })
      .reply(200, { id: 11, title: "t", status: "active" });

    const adapter = new ZentaoApiV1Adapter({
      baseURL: "https://zentao.example.com",
      timeoutMs: 3_000,
      retryCount: 1,
    });

    await adapter.login("alice", "pwd");
    const bug = await adapter.activateBug(11, { comment: "重新打开" });
    expect(bug.status).toBe("active");
    expect(scope.isDone()).toBe(true);
  });

  it("获取产品 Bug 列表使用 GET /products/:id/bugs", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .get("/products/4/bugs")
      .query({ status: "active", page: "1", limit: "20" })
      .matchHeader("token", "token-1")
      .reply(200, {
        page: 1,
        total: 1,
        limit: 20,
        bugs: [
          {
            id: 9,
            title: "Bug3",
            status: { code: "active", name: "激活" },
          },
        ],
      });

    const result = await adapter.getProductBugs(4, {
      status: "active",
      page: 1,
      limit: 20,
    });

    expect(result.total).toBe(1);
    expect(result.bugs).toHaveLength(1);
    expect(result.bugs[0]?.id).toBe(9);
    expect(result.bugs[0]?.status).toBe("active");
    expect(scope.isDone()).toBe(true);
  });

  it("创建 bug 默认 openedBuild 为 trunk", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .post("/products/1/bugs", (body: Record<string, unknown>) => {
        return (
          body.title === "新Bug" &&
          body.severity === 1 &&
          body.pri === 1 &&
          body.type === "codeerror" &&
          Array.isArray(body.openedBuild) &&
          body.openedBuild[0] === "trunk"
        );
      })
      .reply(200, { id: 20, title: "新Bug", status: "active" });

    const bug = await adapter.createBug(1, {
      title: "新Bug",
      severity: 1,
      pri: 1,
      type: "codeerror",
    });
    expect(bug.id).toBe(20);
    expect(scope.isDone()).toBe(true);
  });

  it("创建 bug 支持自定义 openedBuild", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .post("/products/1/bugs", (body: Record<string, unknown>) => {
        return (
          Array.isArray(body.openedBuild) &&
          body.openedBuild[0] === "build-2" &&
          body.openedBuild[1] === "trunk"
        );
      })
      .reply(200, { id: 21, title: "b", status: "active" });

    await adapter.createBug(1, {
      title: "b",
      severity: 2,
      pri: 2,
      type: "config",
      openedBuild: ["build-2", "trunk"],
    });
    expect(scope.isDone()).toBe(true);
  });

  it("修改 bug 使用 PUT /bugs/:id", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .put("/bugs/9", (body: Record<string, unknown>) => {
        return (
          body.title === "改标题" &&
          body.severity === 3 &&
          body.pri === 1 &&
          body.type === "codeerror" &&
          body.openedBuild === undefined
        );
      })
      .reply(200, { id: 9, title: "改标题", status: "active" });

    const bug = await adapter.updateBug(9, {
      title: "改标题",
      severity: 3,
      pri: 1,
      type: "codeerror",
    });
    expect(bug.title).toBe("改标题");
    expect(scope.isDone()).toBe(true);
  });

  it("删除 bug 使用 DELETE /bugs/:id", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .delete("/bugs/9")
      .reply(200, { message: "success" });

    const result = await adapter.deleteBug(9);
    expect(result.message).toBe("success");
    expect(scope.isDone()).toBe(true);
  });

  it("确认 bug 使用 POST /bugs/:id/confirm", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .post("/bugs/9/confirm", (body: Record<string, unknown>) => {
        return body.assignedTo === "dev1" && body.pri === 1 && body.type === "codeerror";
      })
      .reply(200, { id: 9, title: "t", status: "active" });

    const bug = await adapter.confirmBug(9, {
      assignedTo: "dev1",
      pri: 1,
      type: "codeerror",
    });
    expect(bug.id).toBe(9);
    expect(scope.isDone()).toBe(true);
  });

  it("关闭 bug 使用 POST /bugs/:id/close 并校验 status=closed", async () => {
    const adapter = await loginAdapter();
    const scope = nock("https://zentao.example.com")
      .post("/bugs/9/close", (body: Record<string, unknown>) => {
        return body.comment === "验证通过";
      })
      .reply(200, { id: 9, title: "t", status: "closed" });

    const bug = await adapter.closeBug(9, { comment: "验证通过" });
    expect(bug.status).toBe("closed");
    expect(scope.isDone()).toBe(true);
  });

  it("关闭 bug 返回 200 但未真正关闭时抛出 RemoteApiError", async () => {
    const adapter = await loginAdapter();
    nock("https://zentao.example.com")
      .post("/bugs/9/close")
      .reply(200, { id: 9, title: "t", status: "resolved" })
      .get("/bugs/9")
      .reply(200, { id: 9, title: "t", status: "resolved" });

    await expect(adapter.closeBug(9)).rejects.toBeInstanceOf(RemoteApiError);
  });
});
