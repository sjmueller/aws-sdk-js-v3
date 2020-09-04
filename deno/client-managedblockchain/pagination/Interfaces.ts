import { ManagedBlockchain } from "../ManagedBlockchain.ts";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ManagedBlockchainPaginationConfiguration extends PaginationConfiguration {
  client: ManagedBlockchain | ManagedBlockchainClient;
}
