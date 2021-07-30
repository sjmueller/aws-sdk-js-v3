import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SQSClientConfig } from "./SQSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SQSClientConfig = {}) => ({
  apiVersion: "2012-11-05",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SQS",
  urlParser: config.urlParser ?? parseUrl,
});
