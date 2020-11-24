
import { Budgets } from "../Budgets.ts";
import { BudgetsClient } from "../BudgetsClient.ts";
import {
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "../commands/DescribeBudgetActionsForAccountCommand.ts";
import { BudgetsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetActionsForAccountCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetActionsForAccountCommand(input), ...args);
};
const makePagedRequest = async (
  client: Budgets,
  input: DescribeBudgetActionsForAccountCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForAccountCommandOutput> => {
  // @ts-ignore
  return await client.describeBudgetActionsForAccount(input, ...args);
};
export async function* paginateDescribeBudgetActionsForAccount(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionsForAccountCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetActionsForAccountCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBudgetActionsForAccountCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Budgets) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BudgetsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Budgets | BudgetsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
