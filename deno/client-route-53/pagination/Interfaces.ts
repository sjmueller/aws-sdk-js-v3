import { Route53 } from "../Route53.ts";
import { Route53Client } from "../Route53Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface Route53PaginationConfiguration extends PaginationConfiguration {
  client: Route53 | Route53Client;
}
