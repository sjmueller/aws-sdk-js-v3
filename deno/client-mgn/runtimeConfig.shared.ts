import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MgnClientConfig } from "./MgnClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MgnClientConfig = {}) => ({
  apiVersion: "2020-02-26",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "mgn",
  urlParser: config.urlParser ?? parseUrl,
});
