import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppflowClientConfig } from "./AppflowClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppflowClientConfig = {}) => ({
  apiVersion: "2020-08-23",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Appflow",
  urlParser: config.urlParser ?? parseUrl,
});
