
import { IoTAnalytics } from "../IoTAnalytics.ts";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTAnalyticsPaginationConfiguration extends PaginationConfiguration {
  client: IoTAnalytics | IoTAnalyticsClient;
}
