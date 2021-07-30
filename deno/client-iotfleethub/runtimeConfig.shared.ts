import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTFleetHubClientConfig } from "./IoTFleetHubClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTFleetHubClientConfig = {}) => ({
  apiVersion: "2020-11-03",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoTFleetHub",
  urlParser: config.urlParser ?? parseUrl,
});
