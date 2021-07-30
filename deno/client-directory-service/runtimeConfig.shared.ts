import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DirectoryServiceClientConfig } from "./DirectoryServiceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DirectoryServiceClientConfig = {}) => ({
  apiVersion: "2015-04-16",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Directory Service",
  urlParser: config.urlParser ?? parseUrl,
});
