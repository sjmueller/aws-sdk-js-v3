import { SSOAdmin } from "../SSOAdmin.ts";
import { SSOAdminClient } from "../SSOAdminClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SSOAdminPaginationConfiguration extends PaginationConfiguration {
  client: SSOAdmin | SSOAdminClient;
}
