import { CloudHSMV2 } from "../CloudHSMV2.ts";
import { CloudHSMV2Client } from "../CloudHSMV2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CloudHSMV2PaginationConfiguration extends PaginationConfiguration {
  client: CloudHSMV2 | CloudHSMV2Client;
}
