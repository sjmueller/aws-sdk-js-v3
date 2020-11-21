
import { Schemas } from "../Schemas.ts";
import { SchemasClient } from "../SchemasClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SchemasPaginationConfiguration extends PaginationConfiguration {
  client: Schemas | SchemasClient;
}
