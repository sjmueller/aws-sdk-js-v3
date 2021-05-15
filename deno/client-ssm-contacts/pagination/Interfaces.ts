import { SSMContacts } from "../SSMContacts.ts";
import { SSMContactsClient } from "../SSMContactsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SSMContactsPaginationConfiguration extends PaginationConfiguration {
  client: SSMContacts | SSMContactsClient;
}
