import { SFN } from "../SFN.ts";
import { SFNClient } from "../SFNClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SFNPaginationConfiguration extends PaginationConfiguration {
  client: SFN | SFNClient;
}
