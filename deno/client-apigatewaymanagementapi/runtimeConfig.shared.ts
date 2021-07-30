import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ApiGatewayManagementApiClientConfig } from "./ApiGatewayManagementApiClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayManagementApiClientConfig = {}) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ApiGatewayManagementApi",
  urlParser: config.urlParser ?? parseUrl,
});
