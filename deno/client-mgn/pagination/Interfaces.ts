import { Mgn } from "../Mgn.ts";
import { MgnClient } from "../MgnClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MgnPaginationConfiguration extends PaginationConfiguration {
  client: Mgn | MgnClient;
}
