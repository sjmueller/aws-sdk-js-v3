import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeBuildClientConfig } from "./CodeBuildClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeBuildClientConfig = {}) => ({
  apiVersion: "2016-10-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodeBuild",
  urlParser: config.urlParser ?? parseUrl,
});
