
import { Transfer } from "../Transfer.ts";
import { TransferClient } from "../TransferClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface TransferPaginationConfiguration extends PaginationConfiguration {
  client: Transfer | TransferClient;
}
