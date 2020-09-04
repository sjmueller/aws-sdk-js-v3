import { ACM } from "../ACM.ts";
import { ACMClient } from "../ACMClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ACMPaginationConfiguration extends PaginationConfiguration {
  client: ACM | ACMClient;
}
