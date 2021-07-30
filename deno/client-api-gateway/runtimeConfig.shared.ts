import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { APIGatewayClientConfig } from "./APIGatewayClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: APIGatewayClientConfig = {}) => ({
  apiVersion: "2015-07-09",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "API Gateway",
  urlParser: config.urlParser ?? parseUrl,
});
