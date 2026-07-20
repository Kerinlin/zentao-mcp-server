import type { AppContext } from "../server/context.js";
import { createBugSchema } from "../schemas/toolSchemas.js";

export async function runCreateBugTool(context: AppContext, input: unknown) {
  const payload = createBugSchema.parse(input);
  const { productId, ...rest } = payload;
  return context.bugService.createBug(productId, rest);
}
