import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { InspectorClientConfig } from "./InspectorClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: InspectorClientConfig = {}) => ({
  apiVersion: "2016-02-16",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Inspector",
  urlParser: config.urlParser ?? parseUrl,
});
