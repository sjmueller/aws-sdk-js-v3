import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WellArchitectedClientConfig } from "./WellArchitectedClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WellArchitectedClientConfig = {}) => ({
  apiVersion: "2020-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WellArchitected",
  urlParser: config.urlParser ?? parseUrl,
});
