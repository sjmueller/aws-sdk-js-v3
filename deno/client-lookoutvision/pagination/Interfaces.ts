import { LookoutVision } from "../LookoutVision.ts";
import { LookoutVisionClient } from "../LookoutVisionClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LookoutVisionPaginationConfiguration extends PaginationConfiguration {
  client: LookoutVision | LookoutVisionClient;
}
