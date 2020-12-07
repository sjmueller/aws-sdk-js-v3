import { Kendra } from "../Kendra.ts";
import { KendraClient } from "../KendraClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KendraPaginationConfiguration extends PaginationConfiguration {
  client: Kendra | KendraClient;
}
