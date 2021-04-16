import { MWAA } from "../MWAA.ts";
import { MWAAClient } from "../MWAAClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MWAAPaginationConfiguration extends PaginationConfiguration {
  client: MWAA | MWAAClient;
}
