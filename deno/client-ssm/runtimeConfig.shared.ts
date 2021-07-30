import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SSMClientConfig } from "./SSMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMClientConfig = {}) => ({
  apiVersion: "2014-11-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SSM",
  urlParser: config.urlParser ?? parseUrl,
});
