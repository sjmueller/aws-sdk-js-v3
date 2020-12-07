import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface RAMPaginationConfiguration extends PaginationConfiguration {
  client: RAM | RAMClient;
}
