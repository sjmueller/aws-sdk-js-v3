import { GreengrassV2 } from "../GreengrassV2.ts";
import { GreengrassV2Client } from "../GreengrassV2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GreengrassV2PaginationConfiguration extends PaginationConfiguration {
  client: GreengrassV2 | GreengrassV2Client;
}
