
import { CloudWatchLogs } from "../CloudWatchLogs.ts";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudWatchLogsPaginationConfiguration extends PaginationConfiguration {
  client: CloudWatchLogs | CloudWatchLogsClient;
}
