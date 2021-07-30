import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTDataPlaneClientConfig } from "./IoTDataPlaneClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTDataPlaneClientConfig = {}) => ({
  apiVersion: "2015-05-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoT Data Plane",
  urlParser: config.urlParser ?? parseUrl,
});
