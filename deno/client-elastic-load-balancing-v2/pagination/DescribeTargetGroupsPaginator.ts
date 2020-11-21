
import { ElasticLoadBalancingV2 } from "../ElasticLoadBalancingV2.ts";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client.ts";
import {
  DescribeTargetGroupsCommand,
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "../commands/DescribeTargetGroupsCommand.ts";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeTargetGroupsCommandInput,
  ...args: any
): Promise<DescribeTargetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTargetGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticLoadBalancingV2,
  input: DescribeTargetGroupsCommandInput,
  ...args: any
): Promise<DescribeTargetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeTargetGroups(input, ...args);
};
export async function* paginateDescribeTargetGroups(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTargetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTargetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTargetGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof ElasticLoadBalancingV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticLoadBalancingV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
