import { XRay } from "../XRay.ts";
import { XRayClient } from "../XRayClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface XRayPaginationConfiguration extends PaginationConfiguration {
  client: XRay | XRayClient;
}
