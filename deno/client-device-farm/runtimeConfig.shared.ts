import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DeviceFarmClientConfig } from "./DeviceFarmClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DeviceFarmClientConfig = {}) => ({
  apiVersion: "2015-06-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Device Farm",
  urlParser: config.urlParser ?? parseUrl,
});
