import { DataExchange } from "../DataExchange.ts";
import { DataExchangeClient } from "../DataExchangeClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface DataExchangePaginationConfiguration extends PaginationConfiguration {
  client: DataExchange | DataExchangeClient;
}
