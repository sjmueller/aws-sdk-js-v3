import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTWirelessClientConfig } from "./IoTWirelessClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTWirelessClientConfig = {}) => ({
  apiVersion: "2020-11-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoT Wireless",
  urlParser: config.urlParser ?? parseUrl,
});
