import { Budgets } from "../Budgets.ts";
import { BudgetsClient } from "../BudgetsClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface BudgetsPaginationConfiguration extends PaginationConfiguration {
  client: Budgets | BudgetsClient;
}
