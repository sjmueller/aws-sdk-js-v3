import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import { ListRolesCommand, ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListRolesCommandInput,
  ...args: any
): Promise<ListRolesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRolesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListRolesCommandInput,
  ...args: any
): Promise<ListRolesCommandOutput> => {
  // @ts-ignore
  return await client.listRoles(input, ...args);
};
export async function* paginateListRoles(
  config: IAMPaginationConfiguration,
  input: ListRolesCommandInput,
  ...additionalArguments: any
): Paginator<ListRolesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRolesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
