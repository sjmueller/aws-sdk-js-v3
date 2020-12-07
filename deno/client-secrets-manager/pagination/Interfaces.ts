import { SecretsManager } from "../SecretsManager.ts";
import { SecretsManagerClient } from "../SecretsManagerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SecretsManagerPaginationConfiguration extends PaginationConfiguration {
  client: SecretsManager | SecretsManagerClient;
}
