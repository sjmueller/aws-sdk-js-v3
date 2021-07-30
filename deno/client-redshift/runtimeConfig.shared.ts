import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { RedshiftClientConfig } from "./RedshiftClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftClientConfig = {}) => ({
  apiVersion: "2012-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Redshift",
  urlParser: config.urlParser ?? parseUrl,
});
