import { CloudTrail } from "../CloudTrail.ts";
import { CloudTrailClient } from "../CloudTrailClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudTrailPaginationConfiguration extends PaginationConfiguration {
  client: CloudTrail | CloudTrailClient;
}
