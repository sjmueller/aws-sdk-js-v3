import { SSMContacts } from "../SSMContacts.ts";
import { SSMContactsClient } from "../SSMContactsClient.ts";
import {
  ListPagesByContactCommand,
  ListPagesByContactCommandInput,
  ListPagesByContactCommandOutput,
} from "../commands/ListPagesByContactCommand.ts";
import { SSMContactsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListPagesByContactCommandInput,
  ...args: any
): Promise<ListPagesByContactCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPagesByContactCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSMContacts,
  input: ListPagesByContactCommandInput,
  ...args: any
): Promise<ListPagesByContactCommandOutput> => {
  // @ts-ignore
  return await client.listPagesByContact(input, ...args);
};
export async function* paginateListPagesByContact(
  config: SSMContactsPaginationConfiguration,
  input: ListPagesByContactCommandInput,
  ...additionalArguments: any
): Paginator<ListPagesByContactCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPagesByContactCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMContacts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMContactsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMContacts | SSMContactsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
