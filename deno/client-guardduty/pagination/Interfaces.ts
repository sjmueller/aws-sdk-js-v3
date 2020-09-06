
import { GuardDuty } from "../GuardDuty.ts";
import { GuardDutyClient } from "../GuardDutyClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface GuardDutyPaginationConfiguration extends PaginationConfiguration {
  client: GuardDuty | GuardDutyClient;
}
