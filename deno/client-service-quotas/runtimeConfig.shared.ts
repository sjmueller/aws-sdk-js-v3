import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ServiceQuotasClientConfig } from "./ServiceQuotasClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceQuotasClientConfig = {}) => ({
  apiVersion: "2019-06-24",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Service Quotas",
  urlParser: config.urlParser ?? parseUrl,
});
