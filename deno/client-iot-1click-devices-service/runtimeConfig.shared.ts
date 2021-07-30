import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoT1ClickDevicesServiceClientConfig } from "./IoT1ClickDevicesServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoT1ClickDevicesServiceClientConfig = {}) => ({
  apiVersion: "2018-05-14",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoT 1Click Devices Service",
  urlParser: config.urlParser ?? parseUrl,
});
