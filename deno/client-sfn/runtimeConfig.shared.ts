import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SFNClientConfig } from "./SFNClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SFNClientConfig = {}) => ({
  apiVersion: "2016-11-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SFN",
  urlParser: config.urlParser ?? parseUrl,
});
