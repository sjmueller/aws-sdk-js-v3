import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FSxClientConfig } from "./FSxClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FSxClientConfig = {}) => ({
  apiVersion: "2018-03-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "FSx",
  urlParser: config.urlParser ?? parseUrl,
});
