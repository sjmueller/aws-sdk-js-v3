import { Amp } from "../Amp.ts";
import { AmpClient } from "../AmpClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AmpPaginationConfiguration extends PaginationConfiguration {
  client: Amp | AmpClient;
}
