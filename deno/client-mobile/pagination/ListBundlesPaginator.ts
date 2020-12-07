import { Mobile } from "../Mobile.ts";
import { MobileClient } from "../MobileClient.ts";
import { ListBundlesCommand, ListBundlesCommandInput, ListBundlesCommandOutput } from "../commands/ListBundlesCommand.ts";
import { MobilePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MobileClient,
  input: ListBundlesCommandInput,
  ...args: any
): Promise<ListBundlesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBundlesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Mobile,
  input: ListBundlesCommandInput,
  ...args: any
): Promise<ListBundlesCommandOutput> => {
  // @ts-ignore
  return await client.listBundles(input, ...args);
};
export async function* paginateListBundles(
  config: MobilePaginationConfiguration,
  input: ListBundlesCommandInput,
  ...additionalArguments: any
): Paginator<ListBundlesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBundlesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Mobile) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MobileClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mobile | MobileClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
