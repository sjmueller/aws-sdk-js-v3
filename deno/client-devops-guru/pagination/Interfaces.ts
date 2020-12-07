import { DevOpsGuru } from "../DevOpsGuru.ts";
import { DevOpsGuruClient } from "../DevOpsGuruClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DevOpsGuruPaginationConfiguration extends PaginationConfiguration {
  client: DevOpsGuru | DevOpsGuruClient;
}
