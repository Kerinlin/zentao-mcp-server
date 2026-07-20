import { z } from "zod";

const bugStatusEnum = z.enum(["active", "resolved", "closed", "all"]);
const bugResolutionEnum = z.enum([
  "fixed",
  "notrepro",
  "duplicate",
  "bydesign",
  "willnotfix",
  "tostory",
  "external",
  "postponed",
]);
const bugTypeEnum = z.enum([
  "codeerror",
  "config",
  "install",
  "security",
  "performance",
  "standard",
  "automation",
  "designdefect",
  "others",
]);

const openedBuildSchema = z.union([z.string(), z.array(z.string())]);

const bugWriteOptionalFields = {
  branch: z.number().int().min(0).optional(),
  module: z.number().int().min(0).optional(),
  execution: z.number().int().min(0).optional(),
  keywords: z.string().optional(),
  os: z.string().optional(),
  browser: z.string().optional(),
  steps: z.string().optional(),
  task: z.number().int().positive().optional(),
  story: z.number().int().positive().optional(),
  deadline: z.string().optional(),
  openedBuild: openedBuildSchema.optional(),
};

export const initZentaoSchema = z
  .object({
    baseUrl: z.string().url().optional(),
    account: z.string().min(1, "account 不能为空。").optional(),
    password: z.string().min(1).optional(),
    token: z.string().min(1).optional(),
  })
  .refine((data) => Boolean(data.account), "account 为必填。")
  .refine((data) => Boolean(data.password || data.token), "password 或 token 至少提供一个。");

export const getMyBugsSchema = z.object({
  status: bugStatusEnum.optional().default("active"),
  productId: z.number().int().positive().optional(),
});

export const getProductBugsSchema = z.object({
  productId: z.number().int().positive(),
  status: bugStatusEnum.optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
});

export const getBugDetailSchema = z.object({
  bugId: z.number().int().positive(),
});

export const createBugSchema = z.object({
  productId: z.number().int().positive(),
  title: z.string().min(1, "title 不能为空。"),
  severity: z.number().int().min(1),
  pri: z.number().int().min(0),
  type: bugTypeEnum,
  ...bugWriteOptionalFields,
});

export const updateBugSchema = z.object({
  bugId: z.number().int().positive(),
  title: z.string().min(1, "title 不能为空。"),
  severity: z.number().int().min(1),
  pri: z.number().int().min(0),
  type: bugTypeEnum,
  ...bugWriteOptionalFields,
});

export const deleteBugSchema = z.object({
  bugId: z.number().int().positive(),
  confirm: z.literal(true, {
    error: "删除 Bug 不可逆，必须显式传入 confirm: true。",
  }),
});

export const confirmBugSchema = z.object({
  bugId: z.number().int().positive(),
  assignedTo: z.string().optional(),
  type: bugTypeEnum.optional(),
  mailto: z.array(z.string()).optional(),
  comment: z.string().optional(),
  pri: z.number().int().min(0).optional(),
});

export const closeBugSchema = z.object({
  bugId: z.number().int().positive(),
  comment: z.string().optional(),
});

export const resolveBugSchema = z
  .object({
    bugId: z.number().int().positive(),
    resolution: z.object({
      resolution: bugResolutionEnum,
      resolvedBuild: z.string().optional(),
      duplicateBug: z.number().int().positive().optional(),
      comment: z.string().optional(),
    }),
  })
  .superRefine((value, ctx) => {
    if (value.resolution.resolution === "duplicate" && !value.resolution.duplicateBug) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "resolution=duplicate 时必须提供 duplicateBug。",
        path: ["resolution", "duplicateBug"],
      });
    }
  });

export const emptySchema = z.object({});

export const activateBugSchema = z.object({
  bugId: z.number().int().positive(),
  assignedTo: z.string().optional(),
  openedBuild: openedBuildSchema.optional(),
  comment: z.string().optional(),
});

export type InitZentaoInput = z.infer<typeof initZentaoSchema>;
export type GetMyBugsInput = z.infer<typeof getMyBugsSchema>;
export type GetProductBugsInput = z.infer<typeof getProductBugsSchema>;
export type GetBugDetailInput = z.infer<typeof getBugDetailSchema>;
export type CreateBugInput = z.infer<typeof createBugSchema>;
export type UpdateBugInput = z.infer<typeof updateBugSchema>;
export type DeleteBugInput = z.infer<typeof deleteBugSchema>;
export type ConfirmBugInput = z.infer<typeof confirmBugSchema>;
export type CloseBugInput = z.infer<typeof closeBugSchema>;
export type ResolveBugInput = z.infer<typeof resolveBugSchema>;
export type ActivateBugInput = z.infer<typeof activateBugSchema>;

export const mcpInput = {
  initZentao: initZentaoSchema.shape,
  getMyBugs: getMyBugsSchema.shape,
  getProductBugs: getProductBugsSchema.shape,
  getBugDetail: getBugDetailSchema.shape,
  createBug: createBugSchema.shape,
  updateBug: updateBugSchema.shape,
  deleteBug: deleteBugSchema.shape,
  confirmBug: confirmBugSchema.shape,
  closeBug: closeBugSchema.shape,
  resolveBug: resolveBugSchema.shape,
  activateBug: activateBugSchema.shape,
  empty: emptySchema.shape,
};
