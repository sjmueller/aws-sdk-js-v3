
import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SNSClient,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscriptionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SNS,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.listSubscriptions(input, ...args);
};
export async function* paginateListSubscriptions(
  config: SNSPaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscriptionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscriptionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
