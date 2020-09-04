import { MarketplaceCatalog } from "../MarketplaceCatalog.ts";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MarketplaceCatalogPaginationConfiguration extends PaginationConfiguration {
  client: MarketplaceCatalog | MarketplaceCatalogClient;
}
