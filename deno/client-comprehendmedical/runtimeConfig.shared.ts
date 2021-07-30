import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ComprehendMedicalClientConfig } from "./ComprehendMedicalClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ComprehendMedicalClientConfig = {}) => ({
  apiVersion: "2018-10-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ComprehendMedical",
  urlParser: config.urlParser ?? parseUrl,
});
