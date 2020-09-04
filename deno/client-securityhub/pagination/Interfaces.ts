import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SecurityHubPaginationConfiguration extends PaginationConfiguration {
  client: SecurityHub | SecurityHubClient;
}
