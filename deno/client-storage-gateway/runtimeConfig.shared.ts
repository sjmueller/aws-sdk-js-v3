import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { StorageGatewayClientConfig } from "./StorageGatewayClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: StorageGatewayClientConfig = {}) => ({
  apiVersion: "2013-06-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Storage Gateway",
  urlParser: config.urlParser ?? parseUrl,
});
