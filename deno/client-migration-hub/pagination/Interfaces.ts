
import { MigrationHub } from "../MigrationHub.ts";
import { MigrationHubClient } from "../MigrationHubClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MigrationHubPaginationConfiguration extends PaginationConfiguration {
  client: MigrationHub | MigrationHubClient;
}
