import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ConnectClientConfig } from "./ConnectClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectClientConfig = {}) => ({
  apiVersion: "2017-08-08",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Connect",
  urlParser: config.urlParser ?? parseUrl,
});
