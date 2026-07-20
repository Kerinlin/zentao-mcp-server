import { describe, expect, it } from "vitest";
import {
  closeBugSchema,
  confirmBugSchema,
  createBugSchema,
  deleteBugSchema,
  getProductBugsSchema,
  resolveBugSchema,
  updateBugSchema,
} from "../src/schemas/toolSchemas.js";

describe("resolveBugSchema", () => {
  it("duplicate 方案必须提供 duplicateBug", () => {
    const result = resolveBugSchema.safeParse({
      bugId: 123,
      resolution: {
        resolution: "duplicate",
      },
    });

    expect(result.success).toBe(false);
  });

  it("fixed 方案可正常通过", () => {
    const result = resolveBugSchema.safeParse({
      bugId: 123,
      resolution: {
        resolution: "fixed",
        comment: "已经修复",
      },
    });

    expect(result.success).toBe(true);
  });

  it("postponed 方案可正常通过", () => {
    const result = resolveBugSchema.safeParse({
      bugId: 123,
      resolution: {
        resolution: "postponed",
        comment: "延期",
      },
    });

    expect(result.success).toBe(true);
  });
});

describe("createBugSchema", () => {
  it("缺 title 失败", () => {
    const result = createBugSchema.safeParse({
      productId: 1,
      severity: 1,
      pri: 1,
      type: "codeerror",
    });
    expect(result.success).toBe(false);
  });

  it("必填齐全可通过", () => {
    const result = createBugSchema.safeParse({
      productId: 1,
      title: "登录失败",
      severity: 2,
      pri: 1,
      type: "codeerror",
    });
    expect(result.success).toBe(true);
  });
});

describe("updateBugSchema", () => {
  it("缺 severity 失败", () => {
    const result = updateBugSchema.safeParse({
      bugId: 9,
      title: "t",
      pri: 1,
      type: "codeerror",
    });
    expect(result.success).toBe(false);
  });

  it("必填齐全可通过", () => {
    const result = updateBugSchema.safeParse({
      bugId: 9,
      title: "t",
      severity: 1,
      pri: 0,
      type: "others",
    });
    expect(result.success).toBe(true);
  });
});

describe("deleteBugSchema", () => {
  it("无 confirm 失败", () => {
    const result = deleteBugSchema.safeParse({ bugId: 1 });
    expect(result.success).toBe(false);
  });

  it("confirm 非 true 失败", () => {
    const result = deleteBugSchema.safeParse({ bugId: 1, confirm: false });
    expect(result.success).toBe(false);
  });

  it("confirm:true 可通过", () => {
    const result = deleteBugSchema.safeParse({ bugId: 1, confirm: true });
    expect(result.success).toBe(true);
  });
});

describe("getProductBugsSchema", () => {
  it("缺 productId 失败", () => {
    const result = getProductBugsSchema.safeParse({ page: 1 });
    expect(result.success).toBe(false);
  });

  it("仅 productId 可通过", () => {
    const result = getProductBugsSchema.safeParse({ productId: 4 });
    expect(result.success).toBe(true);
  });
});

describe("confirmBugSchema / closeBugSchema", () => {
  it("confirm 仅 bugId 可通过", () => {
    const result = confirmBugSchema.safeParse({ bugId: 5 });
    expect(result.success).toBe(true);
  });

  it("close 仅 bugId 可通过", () => {
    const result = closeBugSchema.safeParse({ bugId: 5 });
    expect(result.success).toBe(true);
  });
});
