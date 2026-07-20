import type { AppContext } from "../server/context.js";
import { deleteBugSchema } from "../schemas/toolSchemas.js";

export async function runDeleteBugTool(context: AppContext, input: unknown) {
  const payload = deleteBugSchema.parse(input);
  return context.bugService.deleteBug(payload.bugId);
}
