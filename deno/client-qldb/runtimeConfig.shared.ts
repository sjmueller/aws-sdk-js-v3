import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { QLDBClientConfig } from "./QLDBClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QLDBClientConfig = {}) => ({
  apiVersion: "2019-01-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "QLDB",
  urlParser: config.urlParser ?? parseUrl,
});
