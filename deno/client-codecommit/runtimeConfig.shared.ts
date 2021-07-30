import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CodeCommitClientConfig } from "./CodeCommitClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeCommitClientConfig = {}) => ({
  apiVersion: "2015-04-13",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CodeCommit",
  urlParser: config.urlParser ?? parseUrl,
});
