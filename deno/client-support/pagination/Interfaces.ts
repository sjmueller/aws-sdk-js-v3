
import { Support } from "../Support.ts";
import { SupportClient } from "../SupportClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SupportPaginationConfiguration extends PaginationConfiguration {
  client: Support | SupportClient;
}
