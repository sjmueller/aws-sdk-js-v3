import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MTurkClientConfig } from "./MTurkClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MTurkClientConfig = {}) => ({
  apiVersion: "2017-01-17",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MTurk",
  urlParser: config.urlParser ?? parseUrl,
});
