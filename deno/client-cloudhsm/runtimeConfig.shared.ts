import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudHSMClientConfig } from "./CloudHSMClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudHSMClientConfig = {}) => ({
  apiVersion: "2014-05-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudHSM",
  urlParser: config.urlParser ?? parseUrl,
});
