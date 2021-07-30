import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { STSClientConfig } from "./STSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: STSClientConfig = {}) => ({
  apiVersion: "2011-06-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "STS",
  urlParser: config.urlParser ?? parseUrl,
});
