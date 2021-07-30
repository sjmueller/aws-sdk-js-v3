import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ApplicationInsightsClientConfig } from "./ApplicationInsightsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationInsightsClientConfig = {}) => ({
  apiVersion: "2018-11-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Application Insights",
  urlParser: config.urlParser ?? parseUrl,
});
