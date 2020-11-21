
import { GameLift } from "../GameLift.ts";
import { GameLiftClient } from "../GameLiftClient.ts";
import {
  DescribeGameSessionsCommand,
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "../commands/DescribeGameSessionsCommand.ts";
import { GameLiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameSessionsCommandInput,
  ...args: any
): Promise<DescribeGameSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameSessionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeGameSessionsCommandInput,
  ...args: any
): Promise<DescribeGameSessionsCommandOutput> => {
  // @ts-ignore
  return await client.describeGameSessions(input, ...args);
};
export async function* paginateDescribeGameSessions(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameSessionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameSessionsCommandOutput;
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
