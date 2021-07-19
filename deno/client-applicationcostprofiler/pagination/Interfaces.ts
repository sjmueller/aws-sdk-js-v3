import { ApplicationCostProfiler } from "../ApplicationCostProfiler.ts";
import { ApplicationCostProfilerClient } from "../ApplicationCostProfilerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ApplicationCostProfilerPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationCostProfiler | ApplicationCostProfilerClient;
}
