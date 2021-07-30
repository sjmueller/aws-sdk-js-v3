import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudHSMV2ClientConfig } from "./CloudHSMV2Client.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudHSMV2ClientConfig = {}) => ({
  apiVersion: "2017-04-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudHSM V2",
  urlParser: config.urlParser ?? parseUrl,
});
