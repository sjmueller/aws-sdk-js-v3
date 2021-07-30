import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeartifactClientConfig } from "./CodeartifactClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeartifactClientConfig = {}) => ({
  apiVersion: "2018-09-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "codeartifact",
  urlParser: config.urlParser ?? parseUrl,
});
