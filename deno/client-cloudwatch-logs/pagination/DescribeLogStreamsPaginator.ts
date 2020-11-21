
import { CloudWatchLogs } from "../CloudWatchLogs.ts";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient.ts";
import {
  DescribeLogStreamsCommand,
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
} from "../commands/DescribeLogStreamsCommand.ts";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeLogStreamsCommandInput,
  ...args: any
): Promise<DescribeLogStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLogStreamsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudWatchLogs,
  input: DescribeLogStreamsCommandInput,
  ...args: any
): Promise<DescribeLogStreamsCommandOutput> => {
  // @ts-ignore
  return await client.describeLogStreams(input, ...args);
};
export async function* paginateDescribeLogStreams(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeLogStreamsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLogStreamsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLogStreamsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
