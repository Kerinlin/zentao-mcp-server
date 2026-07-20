import type { AppContext } from "../server/context.js";
import { confirmBugSchema } from "../schemas/toolSchemas.js";

export async function runConfirmBugTool(context: AppContext, input: unknown) {
  const payload = confirmBugSchema.parse(input);
  const { bugId, ...rest } = payload;
  return context.bugService.confirmBug(bugId, rest);
}
