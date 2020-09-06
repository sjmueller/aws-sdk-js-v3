
import { Snowball } from "../Snowball.ts";
import { SnowballClient } from "../SnowballClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SnowballPaginationConfiguration extends PaginationConfiguration {
  client: Snowball | SnowballClient;
}
