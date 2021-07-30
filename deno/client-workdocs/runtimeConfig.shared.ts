import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WorkDocsClientConfig } from "./WorkDocsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkDocsClientConfig = {}) => ({
  apiVersion: "2016-05-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WorkDocs",
  urlParser: config.urlParser ?? parseUrl,
});
