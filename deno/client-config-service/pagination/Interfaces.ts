
import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ConfigServicePaginationConfiguration extends PaginationConfiguration {
  client: ConfigService | ConfigServiceClient;
}
