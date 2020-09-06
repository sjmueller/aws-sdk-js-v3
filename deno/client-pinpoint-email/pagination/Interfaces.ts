
import { PinpointEmail } from "../PinpointEmail.ts";
import { PinpointEmailClient } from "../PinpointEmailClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface PinpointEmailPaginationConfiguration extends PaginationConfiguration {
  client: PinpointEmail | PinpointEmailClient;
}
