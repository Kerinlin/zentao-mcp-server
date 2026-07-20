import type { ZentaoApiV1Adapter } from "../adapters/zentaoApiV1.js";
import type {
  ActivateBugPayload,
  BugStatus,
  CloseBugPayload,
  ConfirmBugPayload,
  CreateBugPayload,
  DeleteBugResult,
  ProductBugsQuery,
  ProductBugsResult,
  ResolveBugPayload,
  UpdateBugPayload,
  ZentaoBug,
  ZentaoBugDetail,
  ZentaoProduct,
} from "../types/zentao.js";

export class BugService {
  constructor(private readonly adapter: ZentaoApiV1Adapter) {}

  public async getProducts(): Promise<ZentaoProduct[]> {
    return this.adapter.getProducts();
  }

  public async getMyBugs(status?: BugStatus, productId?: number): Promise<ZentaoBug[]> {
    return this.adapter.getMyBugs({ status, productId });
  }

  public async getProductBugs(productId: number, query?: ProductBugsQuery): Promise<ProductBugsResult> {
    return this.adapter.getProductBugs(productId, query);
  }

  public async getBugDetail(bugId: number): Promise<ZentaoBugDetail> {
    return this.adapter.getBugDetail(bugId);
  }

  public async createBug(productId: number, payload: CreateBugPayload): Promise<ZentaoBugDetail> {
    return this.adapter.createBug(productId, payload);
  }

  public async updateBug(bugId: number, payload: UpdateBugPayload): Promise<ZentaoBugDetail> {
    return this.adapter.updateBug(bugId, payload);
  }

  public async deleteBug(bugId: number): Promise<DeleteBugResult> {
    return this.adapter.deleteBug(bugId);
  }

  public async confirmBug(bugId: number, payload?: ConfirmBugPayload): Promise<ZentaoBugDetail> {
    return this.adapter.confirmBug(bugId, payload);
  }

  public async closeBug(bugId: number, payload?: CloseBugPayload): Promise<ZentaoBugDetail> {
    return this.adapter.closeBug(bugId, payload);
  }

  public async resolveBug(bugId: number, payload: ResolveBugPayload): Promise<ZentaoBugDetail> {
    return this.adapter.resolveBug(bugId, payload);
  }

  public async activateBug(bugId: number, payload?: ActivateBugPayload): Promise<ZentaoBugDetail> {
    return this.adapter.activateBug(bugId, payload);
  }
}
