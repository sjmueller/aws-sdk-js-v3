import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ServiceCatalogPaginationConfiguration extends PaginationConfiguration {
  client: ServiceCatalog | ServiceCatalogClient;
}
