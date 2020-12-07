import { ApplicationInsights } from "../ApplicationInsights.ts";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ApplicationInsightsPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationInsights | ApplicationInsightsClient;
}
