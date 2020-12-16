import { Glacier } from "../Glacier.ts";
import { GlacierClient } from "../GlacierClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GlacierPaginationConfiguration extends PaginationConfiguration {
  client: Glacier | GlacierClient;
}
