import { Commander } from "../Commander.ts";
import { CommanderClient } from "../CommanderClient.ts";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand.ts";
import { CommanderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CommanderClient,
  input: GetResourcePoliciesCommandInput,
  ...args: any
): Promise<GetResourcePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourcePoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Commander,
  input: GetResourcePoliciesCommandInput,
  ...args: any
): Promise<GetResourcePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.getResourcePolicies(input, ...args);
};
export async function* paginateGetResourcePolicies(
  config: CommanderPaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<GetResourcePoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourcePoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Commander) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CommanderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Commander | CommanderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
