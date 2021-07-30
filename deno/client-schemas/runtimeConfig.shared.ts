import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SchemasClientConfig } from "./SchemasClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SchemasClientConfig = {}) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "schemas",
  urlParser: config.urlParser ?? parseUrl,
});
