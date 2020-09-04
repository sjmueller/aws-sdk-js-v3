import { Signer } from "../Signer.ts";
import { SignerClient } from "../SignerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SignerPaginationConfiguration extends PaginationConfiguration {
  client: Signer | SignerClient;
}
