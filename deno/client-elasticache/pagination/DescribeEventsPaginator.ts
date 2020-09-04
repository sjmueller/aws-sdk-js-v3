import { ElastiCache } from "../ElastiCache.ts";
import { ElastiCacheClient } from "../ElastiCacheClient.ts";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand.ts";
import { ElastiCachePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.describeEvents(input, ...args);
};
export async function* describeEventsPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEventsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
