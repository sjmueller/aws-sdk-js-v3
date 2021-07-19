import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import {
  ListPhoneNumbersOptedOutCommand,
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
} from "../commands/ListPhoneNumbersOptedOutCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListPhoneNumbersOptedOutCommandInput,
  ...args: any
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumbersOptedOutCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListPhoneNumbersOptedOutCommandInput,
  ...args: any
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  // @ts-ignore
  return await client.listPhoneNumbersOptedOut(input, ...args);
};
export async function* paginateListPhoneNumbersOptedOut(
  config: SNSPaginationConfiguration,
  input: ListPhoneNumbersOptedOutCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumbersOptedOutCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPhoneNumbersOptedOutCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
