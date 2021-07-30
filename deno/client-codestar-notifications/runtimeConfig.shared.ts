import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodestarNotificationsClientConfig } from "./CodestarNotificationsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodestarNotificationsClientConfig = {}) => ({
  apiVersion: "2019-10-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "codestar notifications",
  urlParser: config.urlParser ?? parseUrl,
});
