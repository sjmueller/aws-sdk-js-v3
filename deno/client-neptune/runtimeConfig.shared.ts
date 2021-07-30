import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { NeptuneClientConfig } from "./NeptuneClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NeptuneClientConfig = {}) => ({
  apiVersion: "2014-10-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Neptune",
  urlParser: config.urlParser ?? parseUrl,
});
