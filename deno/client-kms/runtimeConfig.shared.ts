import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KMSClientConfig } from "./KMSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KMSClientConfig = {}) => ({
  apiVersion: "2014-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "KMS",
  urlParser: config.urlParser ?? parseUrl,
});
