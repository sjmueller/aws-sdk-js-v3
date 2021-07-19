import { AppRunner } from "../AppRunner.ts";
import { AppRunnerClient } from "../AppRunnerClient.ts";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand.ts";
import { AppRunnerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppRunnerClient,
  input: ListConnectionsCommandInput,
  ...args: any
): Promise<ListConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppRunner,
  input: ListConnectionsCommandInput,
  ...args: any
): Promise<ListConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.listConnections(input, ...args);
};
export async function* paginateListConnections(
  config: AppRunnerPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppRunner) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppRunner | AppRunnerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
