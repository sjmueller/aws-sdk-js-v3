import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppStreamClientConfig } from "./AppStreamClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppStreamClientConfig = {}) => ({
  apiVersion: "2016-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AppStream",
  urlParser: config.urlParser ?? parseUrl,
});
