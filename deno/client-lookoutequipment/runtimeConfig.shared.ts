import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { LookoutEquipmentClientConfig } from "./LookoutEquipmentClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutEquipmentClientConfig = {}) => ({
  apiVersion: "2020-12-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "LookoutEquipment",
  urlParser: config.urlParser ?? parseUrl,
});
