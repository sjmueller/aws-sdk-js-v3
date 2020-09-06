
import { ApplicationAutoScaling } from "../ApplicationAutoScaling.ts";
import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ApplicationAutoScalingPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationAutoScaling | ApplicationAutoScalingClient;
}
