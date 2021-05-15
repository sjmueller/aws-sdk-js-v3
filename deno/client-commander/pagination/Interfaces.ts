import { Commander } from "../Commander.ts";
import { CommanderClient } from "../CommanderClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CommanderPaginationConfiguration extends PaginationConfiguration {
  client: Commander | CommanderClient;
}
