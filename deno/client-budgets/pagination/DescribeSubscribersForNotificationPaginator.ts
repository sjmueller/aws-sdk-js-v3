import { Budgets } from "../Budgets.ts";
import { BudgetsClient } from "../BudgetsClient.ts";
import {
  DescribeSubscribersForNotificationCommand,
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "../commands/DescribeSubscribersForNotificationCommand.ts";
import { BudgetsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeSubscribersForNotificationCommandInput,
  ...args: any
): Promise<DescribeSubscribersForNotificationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSubscribersForNotificationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Budgets,
  input: DescribeSubscribersForNotificationCommandInput,
  ...args: any
): Promise<DescribeSubscribersForNotificationCommandOutput> => {
  // @ts-ignore
  return await client.describeSubscribersForNotification(input, ...args);
};
export async function* paginateDescribeSubscribersForNotification(
  config: BudgetsPaginationConfiguration,
  input: DescribeSubscribersForNotificationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSubscribersForNotificationCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSubscribersForNotificationCommandOutput;
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
