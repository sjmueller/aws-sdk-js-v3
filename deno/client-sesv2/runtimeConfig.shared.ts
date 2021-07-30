import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SESv2ClientConfig } from "./SESv2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SESv2ClientConfig = {}) => ({
  apiVersion: "2019-09-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SESv2",
  urlParser: config.urlParser ?? parseUrl,
});
