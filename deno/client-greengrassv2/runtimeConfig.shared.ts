import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GreengrassV2ClientConfig } from "./GreengrassV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GreengrassV2ClientConfig = {}) => ({
  apiVersion: "2020-11-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "GreengrassV2",
  urlParser: config.urlParser ?? parseUrl,
});
