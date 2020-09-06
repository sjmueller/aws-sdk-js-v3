
import { DataSync } from "../DataSync.ts";
import { DataSyncClient } from "../DataSyncClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DataSyncPaginationConfiguration extends PaginationConfiguration {
  client: DataSync | DataSyncClient;
}
