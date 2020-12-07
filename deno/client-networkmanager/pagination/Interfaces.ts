import { NetworkManager } from "../NetworkManager.ts";
import { NetworkManagerClient } from "../NetworkManagerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface NetworkManagerPaginationConfiguration extends PaginationConfiguration {
  client: NetworkManager | NetworkManagerClient;
}
