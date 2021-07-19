import { AppRunner } from "../AppRunner.ts";
import { AppRunnerClient } from "../AppRunnerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AppRunnerPaginationConfiguration extends PaginationConfiguration {
  client: AppRunner | AppRunnerClient;
}
