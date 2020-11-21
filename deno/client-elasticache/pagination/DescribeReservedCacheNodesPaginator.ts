
import { ElastiCache } from "../ElastiCache.ts";
import { ElastiCacheClient } from "../ElastiCacheClient.ts";
import {
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "../commands/DescribeReservedCacheNodesCommand.ts";
import { ElastiCachePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeReservedCacheNodesCommandInput,
  ...args: any
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedCacheNodesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeReservedCacheNodesCommandInput,
  ...args: any
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedCacheNodes(input, ...args);
};
export async function* paginateDescribeReservedCacheNodes(
  config: ElastiCachePaginationConfiguration,
  input: DescribeReservedCacheNodesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedCacheNodesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedCacheNodesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
