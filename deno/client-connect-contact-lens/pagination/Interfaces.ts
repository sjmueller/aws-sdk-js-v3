import { ConnectContactLens } from "../ConnectContactLens.ts";
import { ConnectContactLensClient } from "../ConnectContactLensClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ConnectContactLensPaginationConfiguration extends PaginationConfiguration {
  client: ConnectContactLens | ConnectContactLensClient;
}
