import { Fis } from "../Fis.ts";
import { FisClient } from "../FisClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface FisPaginationConfiguration extends PaginationConfiguration {
  client: Fis | FisClient;
}
