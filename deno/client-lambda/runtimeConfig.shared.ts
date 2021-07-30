import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LambdaClientConfig } from "./LambdaClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LambdaClientConfig = {}) => ({
  apiVersion: "2015-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Lambda",
  urlParser: config.urlParser ?? parseUrl,
});
