import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2016-10-06",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "CodeBuild",
  urlParser: parseUrl,
};
