
import { Pricing } from "../Pricing.ts";
import { PricingClient } from "../PricingClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface PricingPaginationConfiguration extends PaginationConfiguration {
  client: Pricing | PricingClient;
}
