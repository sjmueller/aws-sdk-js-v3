import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ChimeClientConfig } from "./ChimeClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeClientConfig = {}) => ({
  apiVersion: "2018-05-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Chime",
  urlParser: config.urlParser ?? parseUrl,
});
