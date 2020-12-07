import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface StorageGatewayPaginationConfiguration extends PaginationConfiguration {
  client: StorageGateway | StorageGatewayClient;
}
