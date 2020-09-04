import { Forecast } from "../Forecast.ts";
import { ForecastClient } from "../ForecastClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ForecastPaginationConfiguration extends PaginationConfiguration {
  client: Forecast | ForecastClient;
}
