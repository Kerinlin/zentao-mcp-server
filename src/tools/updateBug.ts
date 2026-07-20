import type { AppContext } from "../server/context.js";
import { updateBugSchema } from "../schemas/toolSchemas.js";

export async function runUpdateBugTool(context: AppContext, input: unknown) {
  const payload = updateBugSchema.parse(input);
  const { bugId, ...rest } = payload;
  return context.bugService.updateBug(bugId, rest);
}
