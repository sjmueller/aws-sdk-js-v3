import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudDirectoryClientConfig } from "./CloudDirectoryClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudDirectoryClientConfig = {}) => ({
  apiVersion: "2017-01-11",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudDirectory",
  urlParser: config.urlParser ?? parseUrl,
});
