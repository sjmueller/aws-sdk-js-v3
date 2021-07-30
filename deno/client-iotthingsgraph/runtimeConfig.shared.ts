import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTThingsGraphClientConfig } from "./IoTThingsGraphClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTThingsGraphClientConfig = {}) => ({
  apiVersion: "2018-09-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoTThingsGraph",
  urlParser: config.urlParser ?? parseUrl,
});
