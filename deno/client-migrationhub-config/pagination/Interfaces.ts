import { MigrationHubConfig } from "../MigrationHubConfig.ts";
import { MigrationHubConfigClient } from "../MigrationHubConfigClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MigrationHubConfigPaginationConfiguration extends PaginationConfiguration {
  client: MigrationHubConfig | MigrationHubConfigClient;
}
