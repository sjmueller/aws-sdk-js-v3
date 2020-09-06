
import { AutoScaling } from "../AutoScaling.ts";
import { AutoScalingClient } from "../AutoScalingClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface AutoScalingPaginationConfiguration extends PaginationConfiguration {
  client: AutoScaling | AutoScalingClient;
}
