import { DataBrew } from "../DataBrew.ts";
import { DataBrewClient } from "../DataBrewClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DataBrewPaginationConfiguration extends PaginationConfiguration {
  client: DataBrew | DataBrewClient;
}
