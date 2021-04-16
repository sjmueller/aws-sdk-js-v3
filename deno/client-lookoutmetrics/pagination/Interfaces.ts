import { LookoutMetrics } from "../LookoutMetrics.ts";
import { LookoutMetricsClient } from "../LookoutMetricsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LookoutMetricsPaginationConfiguration extends PaginationConfiguration {
  client: LookoutMetrics | LookoutMetricsClient;
}
