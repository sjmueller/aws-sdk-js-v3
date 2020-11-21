
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "../commands/DescribeMaintenanceWindowsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindows(input, ...args);
};
export async function* paginateDescribeMaintenanceWindows(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
