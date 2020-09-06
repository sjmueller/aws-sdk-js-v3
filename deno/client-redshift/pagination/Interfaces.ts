
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface RedshiftPaginationConfiguration extends PaginationConfiguration {
  client: Redshift | RedshiftClient;
}
