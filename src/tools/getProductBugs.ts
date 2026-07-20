import type { AppContext } from "../server/context.js";
import { getProductBugsSchema } from "../schemas/toolSchemas.js";

export async function runGetProductBugsTool(context: AppContext, input: unknown) {
  const payload = getProductBugsSchema.parse(input);
  const { productId, ...query } = payload;
  return context.bugService.getProductBugs(productId, query);
}
