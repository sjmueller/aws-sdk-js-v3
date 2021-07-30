import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { GlacierClientConfig } from "./GlacierClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlacierClientConfig = {}) => ({
  apiVersion: "2012-06-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Glacier",
  urlParser: config.urlParser ?? parseUrl,
});
