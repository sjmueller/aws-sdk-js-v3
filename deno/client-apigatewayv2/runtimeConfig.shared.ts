import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ApiGatewayV2ClientConfig } from "./ApiGatewayV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayV2ClientConfig = {}) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ApiGatewayV2",
  urlParser: config.urlParser ?? parseUrl,
});
