
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowExecutionTaskInvocations(input, ...args);
};
export async function* paginateDescribeMaintenanceWindowExecutionTaskInvocations(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput;
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
