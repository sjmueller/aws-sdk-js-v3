
import { ApplicationDiscoveryService } from "../ApplicationDiscoveryService.ts";
import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ApplicationDiscoveryServicePaginationConfiguration extends PaginationConfiguration {
  client: ApplicationDiscoveryService | ApplicationDiscoveryServiceClient;
}
