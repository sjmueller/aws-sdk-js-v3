import { Mobile } from "../Mobile.ts";
import { MobileClient } from "../MobileClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface MobilePaginationConfiguration extends PaginationConfiguration {
  client: Mobile | MobileClient;
}
