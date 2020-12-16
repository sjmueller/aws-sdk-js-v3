import { Budgets } from "../Budgets.ts";
import { BudgetsClient } from "../BudgetsClient.ts";
import {
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "../commands/DescribeBudgetActionsForAccountCommand.ts";
import { BudgetsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetActionsForAccountCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetActionsForAccountCommand(input), ...args);
};
/**
 * @private
 */
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
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
