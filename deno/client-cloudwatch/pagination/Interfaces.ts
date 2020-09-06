
import { CloudWatch } from "../CloudWatch.ts";
import { CloudWatchClient } from "../CloudWatchClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudWatchPaginationConfiguration extends PaginationConfiguration {
  client: CloudWatch | CloudWatchClient;
}
