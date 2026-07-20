import type { AppContext } from "../server/context.js";
import { closeBugSchema } from "../schemas/toolSchemas.js";

export async function runCloseBugTool(context: AppContext, input: unknown) {
  const payload = closeBugSchema.parse(input);
  const { bugId, ...rest } = payload;
  return context.bugService.closeBug(bugId, rest);
}
