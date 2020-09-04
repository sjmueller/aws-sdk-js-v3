import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "../commands/DescribeParametersCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeParametersCommandInput,
  ...args: any
): Promise<DescribeParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeParametersCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeParametersCommandInput,
  ...args: any
): Promise<DescribeParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeParameters(input, ...args);
};
export async function* describeParametersPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeParametersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeParametersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
