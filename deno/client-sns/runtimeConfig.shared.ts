import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SNSClientConfig } from "./SNSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SNSClientConfig = {}) => ({
  apiVersion: "2010-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SNS",
  urlParser: config.urlParser ?? parseUrl,
});
