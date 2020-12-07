import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry.ts";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ServiceCatalogAppRegistryPaginationConfiguration extends PaginationConfiguration {
  client: ServiceCatalogAppRegistry | ServiceCatalogAppRegistryClient;
}
