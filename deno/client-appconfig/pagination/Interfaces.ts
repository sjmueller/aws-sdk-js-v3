import { AppConfig } from "../AppConfig.ts";
import { AppConfigClient } from "../AppConfigClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AppConfigPaginationConfiguration extends PaginationConfiguration {
  client: AppConfig | AppConfigClient;
}
