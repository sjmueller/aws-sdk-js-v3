import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { FinspaceClientConfig } from "./FinspaceClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FinspaceClientConfig = {}) => ({
  apiVersion: "2021-03-12",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "finspace",
  urlParser: config.urlParser ?? parseUrl,
});
