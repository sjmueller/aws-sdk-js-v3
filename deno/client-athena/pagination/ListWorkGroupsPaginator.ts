import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import {
  ListWorkGroupsCommand,
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput,
} from "../commands/ListWorkGroupsCommand.ts";
import { AthenaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListWorkGroupsCommandInput,
  ...args: any
): Promise<ListWorkGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListWorkGroupsCommandInput,
  ...args: any
): Promise<ListWorkGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkGroups(input, ...args);
};
export async function* paginateListWorkGroups(
  config: AthenaPaginationConfiguration,
  input: ListWorkGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
