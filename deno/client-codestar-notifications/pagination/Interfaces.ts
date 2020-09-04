import { CodestarNotifications } from "../CodestarNotifications.ts";
import { CodestarNotificationsClient } from "../CodestarNotificationsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodestarNotificationsPaginationConfiguration extends PaginationConfiguration {
  client: CodestarNotifications | CodestarNotificationsClient;
}
