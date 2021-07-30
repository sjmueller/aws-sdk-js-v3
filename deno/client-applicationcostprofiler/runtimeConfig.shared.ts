import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ApplicationCostProfilerClientConfig } from "./ApplicationCostProfilerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationCostProfilerClientConfig = {}) => ({
  apiVersion: "2020-09-10",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ApplicationCostProfiler",
  urlParser: config.urlParser ?? parseUrl,
});
