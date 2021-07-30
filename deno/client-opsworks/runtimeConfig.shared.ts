import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { OpsWorksClientConfig } from "./OpsWorksClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpsWorksClientConfig = {}) => ({
  apiVersion: "2013-02-18",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "OpsWorks",
  urlParser: config.urlParser ?? parseUrl,
});
