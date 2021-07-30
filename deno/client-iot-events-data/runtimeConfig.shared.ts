import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTEventsDataClientConfig } from "./IoTEventsDataClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsDataClientConfig = {}) => ({
  apiVersion: "2018-10-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoT Events Data",
  urlParser: config.urlParser ?? parseUrl,
});
