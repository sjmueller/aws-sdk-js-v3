import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { QLDBSessionClientConfig } from "./QLDBSessionClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QLDBSessionClientConfig = {}) => ({
  apiVersion: "2019-07-11",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "QLDB Session",
  urlParser: config.urlParser ?? parseUrl,
});
