import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ShieldClientConfig } from "./ShieldClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ShieldClientConfig = {}) => ({
  apiVersion: "2016-06-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Shield",
  urlParser: config.urlParser ?? parseUrl,
});
