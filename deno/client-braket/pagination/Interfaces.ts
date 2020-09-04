import { Braket } from "../Braket.ts";
import { BraketClient } from "../BraketClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface BraketPaginationConfiguration extends PaginationConfiguration {
  client: Braket | BraketClient;
}
