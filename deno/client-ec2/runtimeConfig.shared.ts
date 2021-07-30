import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { EC2ClientConfig } from "./EC2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2ClientConfig = {}) => ({
  apiVersion: "2016-11-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "EC2",
  urlParser: config.urlParser ?? parseUrl,
});
