import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ConnectPaginationConfiguration extends PaginationConfiguration {
  client: Connect | ConnectClient;
}
