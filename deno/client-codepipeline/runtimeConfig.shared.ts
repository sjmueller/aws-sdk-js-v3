import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodePipelineClientConfig } from "./CodePipelineClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodePipelineClientConfig = {}) => ({
  apiVersion: "2015-07-09",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodePipeline",
  urlParser: config.urlParser ?? parseUrl,
});
