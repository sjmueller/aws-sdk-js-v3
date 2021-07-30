import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SMSClientConfig } from "./SMSClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SMSClientConfig = {}) => ({
  apiVersion: "2016-10-24",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SMS",
  urlParser: config.urlParser ?? parseUrl,
});
