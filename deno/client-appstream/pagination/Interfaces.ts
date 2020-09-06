
import { AppStream } from "../AppStream.ts";
import { AppStreamClient } from "../AppStreamClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AppStreamPaginationConfiguration extends PaginationConfiguration {
  client: AppStream | AppStreamClient;
}
