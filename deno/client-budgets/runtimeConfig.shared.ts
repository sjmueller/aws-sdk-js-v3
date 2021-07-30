import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { BudgetsClientConfig } from "./BudgetsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BudgetsClientConfig = {}) => ({
  apiVersion: "2016-10-20",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Budgets",
  urlParser: config.urlParser ?? parseUrl,
});
