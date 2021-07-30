import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { WorkLinkClientConfig } from "./WorkLinkClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkLinkClientConfig = {}) => ({
  apiVersion: "2018-09-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WorkLink",
  urlParser: config.urlParser ?? parseUrl,
});
