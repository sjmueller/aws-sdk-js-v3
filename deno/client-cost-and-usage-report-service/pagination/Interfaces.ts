
import { CostAndUsageReportService } from "../CostAndUsageReportService.ts";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CostAndUsageReportServicePaginationConfiguration extends PaginationConfiguration {
  client: CostAndUsageReportService | CostAndUsageReportServiceClient;
}
