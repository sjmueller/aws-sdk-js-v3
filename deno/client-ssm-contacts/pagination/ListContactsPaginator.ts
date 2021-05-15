import { SSMContacts } from "../SSMContacts.ts";
import { SSMContactsClient } from "../SSMContactsClient.ts";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "../commands/ListContactsCommand.ts";
import { SSMContactsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListContactsCommandInput,
  ...args: any
): Promise<ListContactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSMContacts,
  input: ListContactsCommandInput,
  ...args: any
): Promise<ListContactsCommandOutput> => {
  // @ts-ignore
  return await client.listContacts(input, ...args);
};
export async function* paginateListContacts(
  config: SSMContactsPaginationConfiguration,
  input: ListContactsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactsCommandOutput;
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
