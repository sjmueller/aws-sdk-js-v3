
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
} from "../commands/DescribeDBProxyTargetGroupsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBProxyTargetGroupsCommandInput,
  ...args: any
): Promise<DescribeDBProxyTargetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBProxyTargetGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBProxyTargetGroupsCommandInput,
  ...args: any
): Promise<DescribeDBProxyTargetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBProxyTargetGroups(input, ...args);
};
export async function* describeDBProxyTargetGroupsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyTargetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBProxyTargetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBProxyTargetGroupsCommandOutput;
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
