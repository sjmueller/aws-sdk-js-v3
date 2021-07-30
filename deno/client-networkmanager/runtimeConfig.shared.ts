import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { NetworkManagerClientConfig } from "./NetworkManagerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NetworkManagerClientConfig = {}) => ({
  apiVersion: "2019-07-05",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "NetworkManager",
  urlParser: config.urlParser ?? parseUrl,
});
