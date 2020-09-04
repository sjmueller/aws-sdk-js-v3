import { FSx } from "../FSx.ts";
import { FSxClient } from "../FSxClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface FSxPaginationConfiguration extends PaginationConfiguration {
  client: FSx | FSxClient;
}
