import { MediaConnect } from "../MediaConnect.ts";
import { MediaConnectClient } from "../MediaConnectClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MediaConnectPaginationConfiguration extends PaginationConfiguration {
  client: MediaConnect | MediaConnectClient;
}
