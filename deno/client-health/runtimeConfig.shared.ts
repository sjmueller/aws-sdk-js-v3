import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { HealthClientConfig } from "./HealthClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthClientConfig = {}) => ({
  apiVersion: "2016-08-04",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Health",
  urlParser: config.urlParser ?? parseUrl,
});
