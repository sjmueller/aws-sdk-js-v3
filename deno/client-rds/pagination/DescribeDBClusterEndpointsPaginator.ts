
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "../commands/DescribeDBClusterEndpointsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterEndpointsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBClusterEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterEndpoints(input, ...args);
};
export async function* describeDBClusterEndpointsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBClusterEndpointsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
