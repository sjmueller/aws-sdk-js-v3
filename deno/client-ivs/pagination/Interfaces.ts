import { Ivs } from "../Ivs.ts";
import { IvsClient } from "../IvsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IvsPaginationConfiguration extends PaginationConfiguration {
  client: Ivs | IvsClient;
}
