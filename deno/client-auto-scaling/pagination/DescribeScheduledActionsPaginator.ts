
import { AutoScaling } from "../AutoScaling.ts";
import { AutoScalingClient } from "../AutoScalingClient.ts";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand.ts";
import { AutoScalingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeScheduledActionsCommandInput,
  ...args: any
): Promise<DescribeScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScheduledActionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeScheduledActionsCommandInput,
  ...args: any
): Promise<DescribeScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.describeScheduledActions(input, ...args);
};
export async function* describeScheduledActionsPaginate(
  config: AutoScalingPaginationConfiguration,
  input: DescribeScheduledActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScheduledActionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeScheduledActionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
