export type BugStatus = "active" | "resolved" | "closed" | "all";

export type TaskStatus = "wait" | "doing" | "done" | "all";

export type BugResolutionType =
  | "fixed"
  | "notrepro"
  | "duplicate"
  | "bydesign"
  | "willnotfix"
  | "tostory"
  | "external"
  | "postponed";

/** 禅道 Bug 类型（API v1 文档枚举） */
export type BugType =
  | "codeerror"
  | "config"
  | "install"
  | "security"
  | "performance"
  | "standard"
  | "automation"
  | "designdefect"
  | "others";

export interface ZentaoAuthSession {
  baseUrl: string;
  account: string;
  token: string;
  expiresAt?: number;
}

export interface ZentaoProduct {
  id: number;
  name: string;
  code?: string;
}

export interface ZentaoBug {
  id: number;
  title: string;
  status: string;
  severity?: number;
  pri?: number;
  assignedTo?: string;
  openedBy?: string;
  openedDate?: string;
}

export interface ZentaoBugDetail extends ZentaoBug {
  steps?: string;
  comment?: string;
  story?: number;
  task?: number;
  project?: number;
  product?: number;
}

export interface ResolveBugPayload {
  resolution: BugResolutionType;
  resolvedBuild?: string;
  duplicateBug?: number;
  comment?: string;
}

/** 禅道 API v1：POST /bugs/{id}/active */
export interface ActivateBugPayload {
  assignedTo?: string;
  /** 影响版本（文档为数组）；未传时默认 ["trunk"] */
  openedBuild?: string | string[];
  comment?: string;
}

/** 创建/修改 Bug 公共字段（文档 2.14.2 / 2.14.4） */
export interface BugWriteFields {
  title: string;
  severity: number;
  pri: number;
  type: BugType;
  branch?: number;
  module?: number;
  execution?: number;
  keywords?: string;
  os?: string;
  browser?: string;
  steps?: string;
  task?: number;
  story?: number;
  deadline?: string;
  /** 影响版本；create 未传时 adapter 默认 ["trunk"] */
  openedBuild?: string | string[];
}

export type CreateBugPayload = BugWriteFields;
export type UpdateBugPayload = BugWriteFields;

/** 禅道 API v1：POST /bugs/{id}/confirm */
export interface ConfirmBugPayload {
  assignedTo?: string;
  type?: BugType;
  mailto?: string[];
  comment?: string;
  pri?: number;
}

/** 禅道 API v1：POST /bugs/{id}/close */
export interface CloseBugPayload {
  comment?: string;
}

/** 禅道 API v1：DELETE /bugs/{id} */
export interface DeleteBugResult {
  message: string;
}

/** 禅道 API v1：GET /products/{id}/bugs 查询参数 */
export interface ProductBugsQuery {
  status?: BugStatus;
  page?: number;
  limit?: number;
}

/** 禅道 API v1：GET /products/{id}/bugs 分页结果 */
export interface ProductBugsResult {
  page: number;
  total: number;
  limit: number;
  bugs: ZentaoBug[];
}
