import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CostAndUsageReportServiceClientConfig } from "./CostAndUsageReportServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CostAndUsageReportServiceClientConfig = {}) => ({
  apiVersion: "2017-01-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Cost and Usage Report Service",
  urlParser: config.urlParser ?? parseUrl,
});
