import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ConfigServiceClientConfig } from "./ConfigServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConfigServiceClientConfig = {}) => ({
  apiVersion: "2014-11-12",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Config Service",
  urlParser: config.urlParser ?? parseUrl,
});
