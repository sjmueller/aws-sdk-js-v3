
import { ElasticLoadBalancing } from "../ElasticLoadBalancing.ts";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient.ts";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand.ts";
import { ElasticLoadBalancingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticLoadBalancingClient,
  input: DescribeLoadBalancersCommandInput,
  ...args: any
): Promise<DescribeLoadBalancersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLoadBalancersCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticLoadBalancing,
  input: DescribeLoadBalancersCommandInput,
  ...args: any
): Promise<DescribeLoadBalancersCommandOutput> => {
  // @ts-ignore
  return await client.describeLoadBalancers(input, ...args);
};
export async function* describeLoadBalancersPaginate(
  config: ElasticLoadBalancingPaginationConfiguration,
  input: DescribeLoadBalancersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLoadBalancersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeLoadBalancersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    if (config.client instanceof ElasticLoadBalancing) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticLoadBalancingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticLoadBalancing | ElasticLoadBalancingClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
