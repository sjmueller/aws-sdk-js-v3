
import { Appflow } from "../Appflow.ts";
import { AppflowClient } from "../AppflowClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AppflowPaginationConfiguration extends PaginationConfiguration {
  client: Appflow | AppflowClient;
}
