import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AthenaPaginationConfiguration extends PaginationConfiguration {
  client: Athena | AthenaClient;
}
