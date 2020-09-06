
import { MTurk } from "../MTurk.ts";
import { MTurkClient } from "../MTurkClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MTurkPaginationConfiguration extends PaginationConfiguration {
  client: MTurk | MTurkClient;
}
