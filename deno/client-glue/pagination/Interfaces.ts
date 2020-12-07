import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GluePaginationConfiguration extends PaginationConfiguration {
  client: Glue | GlueClient;
}
