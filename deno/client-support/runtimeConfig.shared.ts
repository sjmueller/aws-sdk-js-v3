import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SupportClientConfig } from "./SupportClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportClientConfig = {}) => ({
  apiVersion: "2013-04-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Support",
  urlParser: config.urlParser ?? parseUrl,
});
