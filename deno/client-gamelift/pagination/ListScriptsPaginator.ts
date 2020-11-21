
import { GameLift } from "../GameLift.ts";
import { GameLiftClient } from "../GameLiftClient.ts";
import { ListScriptsCommand, ListScriptsCommandInput, ListScriptsCommandOutput } from "../commands/ListScriptsCommand.ts";
import { GameLiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListScriptsCommandInput,
  ...args: any
): Promise<ListScriptsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScriptsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: ListScriptsCommandInput,
  ...args: any
): Promise<ListScriptsCommandOutput> => {
  // @ts-ignore
  return await client.listScripts(input, ...args);
};
export async function* paginateListScripts(
  config: GameLiftPaginationConfiguration,
  input: ListScriptsCommandInput,
  ...additionalArguments: any
): Paginator<ListScriptsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScriptsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof GameLift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
