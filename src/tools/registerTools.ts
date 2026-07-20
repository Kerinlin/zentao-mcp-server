import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { AuthError, ValidationError } from "../errors.js";
import {
  activateBugSchema,
  closeBugSchema,
  confirmBugSchema,
  createBugSchema,
  deleteBugSchema,
  getBugDetailSchema,
  getMyBugsSchema,
  getProductBugsSchema,
  initZentaoSchema,
  mcpInput,
  resolveBugSchema,
  updateBugSchema,
} from "../schemas/toolSchemas.js";
import type { AppContext } from "../server/context.js";
import { runActivateBugTool } from "./activateBug.js";
import { runCloseBugTool } from "./closeBug.js";
import { runConfirmBugTool } from "./confirmBug.js";
import { runCreateBugTool } from "./createBug.js";
import { runDeleteBugTool } from "./deleteBug.js";
import { runGetBugDetailTool } from "./getBugDetail.js";
import { runGetMyBugsTool } from "./getMyBugs.js";
import { runGetProductBugsTool } from "./getProductBugs.js";
import { runInitZentaoTool } from "./initZentao.js";
import { runResolveBugTool } from "./resolveBug.js";
import { runUpdateBugTool } from "./updateBug.js";
import { failure, success } from "./toolResult.js";

export function registerZentaoTools(server: McpServer, context: AppContext): void {
  server.registerTool(
    "initZentao",
    {
      description: "初始化禅道连接并登录（支持 password 或 token）。",
      inputSchema: mcpInput.initZentao,
    },
    async (input) => {
      try {
        const payload = initZentaoSchema.parse(input);
        const session = await runInitZentaoTool(context, payload);
        return success(
          {
            account: session.account,
            baseUrl: session.baseUrl,
            expiresAt: session.expiresAt,
          },
          "禅道连接初始化成功",
        );
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "getProducts",
    {
      description: "获取禅道产品列表。",
      inputSchema: mcpInput.empty,
      annotations: { readOnlyHint: true },
    },
    async () => {
      try {
        const products = await context.bugService.getProducts();
        return success(products, "产品列表");
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "getMyBugs",
    {
      description: "按状态与产品筛选指派给我的 bug 列表（跨产品聚合；非官方产品路径）。",
      inputSchema: mcpInput.getMyBugs,
      annotations: { readOnlyHint: true },
    },
    async (input) => {
      try {
        const payload = getMyBugsSchema.parse(input);
        const bugs = await runGetMyBugsTool(context, payload);
        return success(
          {
            total: bugs.length,
            bugs,
          },
          "我的 Bug 列表",
        );
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "getProductBugs",
    {
      description:
        "获取指定产品的 Bug 列表（官方路径 GET /products/{id}/bugs）。单页返回，不自动翻页；可用 page/limit 翻页。与 getMyBugs（指派给我的）语义不同。",
      inputSchema: mcpInput.getProductBugs,
      annotations: { readOnlyHint: true },
    },
    async (input) => {
      try {
        const payload = getProductBugsSchema.parse(input);
        const result = await runGetProductBugsTool(context, payload);
        return success(result, `产品 #${payload.productId} Bug 列表`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "getBugDetail",
    {
      description: "查看单个 bug 详情。",
      inputSchema: mcpInput.getBugDetail,
      annotations: { readOnlyHint: true },
    },
    async (input) => {
      try {
        const payload = getBugDetailSchema.parse(input);
        const detail = await runGetBugDetailTool(context, payload);
        return success(detail, `Bug #${payload.bugId} 详情`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "createBug",
    {
      description:
        "在指定产品下创建 Bug（POST /products/{id}/bugs）。必填 title/severity/pri/type；openedBuild 未传时默认 [\"trunk\"]。",
      inputSchema: mcpInput.createBug,
    },
    async (input) => {
      try {
        const payload = createBugSchema.parse(input);
        const detail = await runCreateBugTool(context, payload);
        return success(detail, `Bug #${detail.id ?? "?"} 已创建`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "updateBug",
    {
      description:
        "修改 Bug（PUT /bugs/{id}）。按文档强制提交 title/severity/pri/type；建议先 getBugDetail 再改。",
      inputSchema: mcpInput.updateBug,
    },
    async (input) => {
      try {
        const payload = updateBugSchema.parse(input);
        const detail = await runUpdateBugTool(context, payload);
        return success(detail, `Bug #${payload.bugId} 已更新`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "deleteBug",
    {
      description:
        "删除 Bug（DELETE /bugs/{id}，不可逆）。必须显式传入 confirm: true，否则拒绝执行。",
      inputSchema: mcpInput.deleteBug,
    },
    async (input) => {
      try {
        const payload = deleteBugSchema.parse(input);
        const result = await runDeleteBugTool(context, payload);
        return success(result, `Bug #${payload.bugId} 已删除`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "confirmBug",
    {
      description: "确认 Bug（POST /bugs/{id}/confirm）。可选指派、类型、抄送、备注、优先级。",
      inputSchema: mcpInput.confirmBug,
    },
    async (input) => {
      try {
        const payload = confirmBugSchema.parse(input);
        const detail = await runConfirmBugTool(context, payload);
        return success(detail, `Bug #${payload.bugId} 已确认`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "closeBug",
    {
      description: "关闭 Bug（POST /bugs/{id}/close）。成功后校验 status=closed。",
      inputSchema: mcpInput.closeBug,
    },
    async (input) => {
      try {
        const payload = closeBugSchema.parse(input);
        const detail = await runCloseBugTool(context, payload);
        return success(detail, `Bug #${payload.bugId} 已关闭`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "resolveBug",
    {
      description:
        "提交 Bug 解决动作（fixed/notrepro/duplicate/bydesign/willnotfix/tostory/external/postponed）。",
      inputSchema: mcpInput.resolveBug,
    },
    async (input) => {
      try {
        const payload = resolveBugSchema.parse(input);
        const detail = await runResolveBugTool(context, payload);
        return success(detail, `Bug #${payload.bugId} 已提交解决`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "activateBug",
    {
      description:
        "激活（重新打开）Bug，对应禅道 API v1：POST /bugs/{id}/active。适用于已解决/已关闭后重新激活。",
      inputSchema: mcpInput.activateBug,
    },
    async (input) => {
      try {
        const payload = activateBugSchema.parse(input);
        const detail = await runActivateBugTool(context, payload);
        return success(detail, `Bug #${payload.bugId} 已激活`);
      } catch (error) {
        return failure(error);
      }
    },
  );

  server.registerTool(
    "healthCheck",
    {
      description: "检查当前会话与服务可用性。",
      inputSchema: mcpInput.empty,
      annotations: { readOnlyHint: true },
    },
    async () => {
      try {
        const session = context.authService.getSession();
        return success({
          service: "zentao-mcp-server",
          initialized: Boolean(session),
          account: session?.account ?? null,
          baseUrl: session?.baseUrl ?? null,
        });
      } catch (error) {
        return failure(error);
      }
    },
  );
}

export function ensureBaseUrl(inputBaseUrl?: string, envBaseUrl?: string): string {
  const baseUrl = inputBaseUrl ?? envBaseUrl;
  if (!baseUrl) {
    throw new ValidationError("缺少禅道地址，请在 initZentao 传入 baseUrl 或配置 ZENTAO_BASE_URL。");
  }
  return baseUrl;
}

export function ensureAuthReady(account?: string): void {
  if (!account) {
    throw new AuthError("请先调用 initZentao 完成认证。");
  }
}
