import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListHandshakesForAccountCommand,
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "../commands/ListHandshakesForAccountCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListHandshakesForAccountCommandInput,
  ...args: any
): Promise<ListHandshakesForAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHandshakesForAccountCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Organizations,
  input: ListHandshakesForAccountCommandInput,
  ...args: any
): Promise<ListHandshakesForAccountCommandOutput> => {
  // @ts-ignore
  return await client.listHandshakesForAccount(input, ...args);
};
export async function* paginateListHandshakesForAccount(
  config: OrganizationsPaginationConfiguration,
  input: ListHandshakesForAccountCommandInput,
  ...additionalArguments: any
): Paginator<ListHandshakesForAccountCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHandshakesForAccountCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
