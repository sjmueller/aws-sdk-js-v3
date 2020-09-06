
import { SWF } from "../SWF.ts";
import { SWFClient } from "../SWFClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SWFPaginationConfiguration extends PaginationConfiguration {
  client: SWF | SWFClient;
}
