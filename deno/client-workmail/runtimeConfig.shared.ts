import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WorkMailClientConfig } from "./WorkMailClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailClientConfig = {}) => ({
  apiVersion: "2017-10-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WorkMail",
  urlParser: config.urlParser ?? parseUrl,
});
