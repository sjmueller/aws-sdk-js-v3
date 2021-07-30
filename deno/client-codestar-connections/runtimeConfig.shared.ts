import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeStarConnectionsClientConfig } from "./CodeStarConnectionsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeStarConnectionsClientConfig = {}) => ({
  apiVersion: "2019-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodeStar connections",
  urlParser: config.urlParser ?? parseUrl,
});
