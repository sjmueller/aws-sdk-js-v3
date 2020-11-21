
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeOptionGroupsCommand,
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
} from "../commands/DescribeOptionGroupsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeOptionGroupsCommandInput,
  ...args: any
): Promise<DescribeOptionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOptionGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeOptionGroupsCommandInput,
  ...args: any
): Promise<DescribeOptionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeOptionGroups(input, ...args);
};
export async function* paginateDescribeOptionGroups(
  config: RDSPaginationConfiguration,
  input: DescribeOptionGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOptionGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOptionGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
