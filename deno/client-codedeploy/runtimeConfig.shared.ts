import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeDeployClientConfig } from "./CodeDeployClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeDeployClientConfig = {}) => ({
  apiVersion: "2014-10-06",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodeDeploy",
  urlParser: config.urlParser ?? parseUrl,
});
