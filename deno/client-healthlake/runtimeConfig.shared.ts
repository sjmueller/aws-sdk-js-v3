import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { HealthLakeClientConfig } from "./HealthLakeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthLakeClientConfig = {}) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "HealthLake",
  urlParser: config.urlParser ?? parseUrl,
});
