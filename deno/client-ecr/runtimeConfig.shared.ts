import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ECRClientConfig } from "./ECRClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRClientConfig = {}) => ({
  apiVersion: "2015-09-21",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ECR",
  urlParser: config.urlParser ?? parseUrl,
});
