
import { ConnectParticipant } from "../ConnectParticipant.ts";
import { ConnectParticipantClient } from "../ConnectParticipantClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ConnectParticipantPaginationConfiguration extends PaginationConfiguration {
  client: ConnectParticipant | ConnectParticipantClient;
}
