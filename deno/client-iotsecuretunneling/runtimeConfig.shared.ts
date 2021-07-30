import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTSecureTunnelingClientConfig } from "./IoTSecureTunnelingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTSecureTunnelingClientConfig = {}) => ({
  apiVersion: "2018-10-05",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "IoTSecureTunneling",
  urlParser: config.urlParser ?? parseUrl,
});
