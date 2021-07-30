import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { OutpostsClientConfig } from "./OutpostsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OutpostsClientConfig = {}) => ({
  apiVersion: "2019-12-03",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Outposts",
  urlParser: config.urlParser ?? parseUrl,
});
