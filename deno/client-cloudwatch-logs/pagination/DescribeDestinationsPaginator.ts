
import { CloudWatchLogs } from "../CloudWatchLogs.ts";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient.ts";
import {
  DescribeDestinationsCommand,
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "../commands/DescribeDestinationsCommand.ts";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeDestinationsCommandInput,
  ...args: any
): Promise<DescribeDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDestinationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatchLogs,
  input: DescribeDestinationsCommandInput,
  ...args: any
): Promise<DescribeDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.describeDestinations(input, ...args);
};
export async function* describeDestinationsPaginate(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDestinationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDestinationsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
