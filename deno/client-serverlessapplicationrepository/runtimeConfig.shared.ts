import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ServerlessApplicationRepositoryClientConfig } from "./ServerlessApplicationRepositoryClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServerlessApplicationRepositoryClientConfig = {}) => ({
  apiVersion: "2017-09-08",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ServerlessApplicationRepository",
  urlParser: config.urlParser ?? parseUrl,
});
