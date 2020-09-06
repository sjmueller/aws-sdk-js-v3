
import { ACMPCA } from "../ACMPCA.ts";
import { ACMPCAClient } from "../ACMPCAClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ACMPCAPaginationConfiguration extends PaginationConfiguration {
  client: ACMPCA | ACMPCAClient;
}
