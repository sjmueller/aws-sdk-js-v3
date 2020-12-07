import { SSOAdmin } from "../SSOAdmin.ts";
import { SSOAdminClient } from "../SSOAdminClient.ts";
import {
  ListPermissionSetsCommand,
  ListPermissionSetsCommandInput,
  ListPermissionSetsCommandOutput,
} from "../commands/ListPermissionSetsCommand.ts";
import { SSOAdminPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListPermissionSetsCommandInput,
  ...args: any
): Promise<ListPermissionSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListPermissionSetsCommandInput,
  ...args: any
): Promise<ListPermissionSetsCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionSets(input, ...args);
};
export async function* paginateListPermissionSets(
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionSetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSOAdmin) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
