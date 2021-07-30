import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppRunnerClientConfig } from "./AppRunnerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppRunnerClientConfig = {}) => ({
  apiVersion: "2020-05-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AppRunner",
  urlParser: config.urlParser ?? parseUrl,
});
