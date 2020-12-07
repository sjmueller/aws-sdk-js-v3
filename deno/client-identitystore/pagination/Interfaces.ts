import { Identitystore } from "../Identitystore.ts";
import { IdentitystoreClient } from "../IdentitystoreClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IdentitystorePaginationConfiguration extends PaginationConfiguration {
  client: Identitystore | IdentitystoreClient;
}
