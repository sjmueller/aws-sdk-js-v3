import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeStarClientConfig } from "./CodeStarClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeStarClientConfig = {}) => ({
  apiVersion: "2017-04-19",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodeStar",
  urlParser: config.urlParser ?? parseUrl,
});
