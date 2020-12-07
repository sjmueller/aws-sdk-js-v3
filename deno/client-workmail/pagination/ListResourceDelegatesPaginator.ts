import { WorkMail } from "../WorkMail.ts";
import { WorkMailClient } from "../WorkMailClient.ts";
import {
  ListResourceDelegatesCommand,
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "../commands/ListResourceDelegatesCommand.ts";
import { WorkMailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListResourceDelegatesCommandInput,
  ...args: any
): Promise<ListResourceDelegatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceDelegatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkMail,
  input: ListResourceDelegatesCommandInput,
  ...args: any
): Promise<ListResourceDelegatesCommandOutput> => {
  // @ts-ignore
  return await client.listResourceDelegates(input, ...args);
};
export async function* paginateListResourceDelegates(
  config: WorkMailPaginationConfiguration,
  input: ListResourceDelegatesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceDelegatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceDelegatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
