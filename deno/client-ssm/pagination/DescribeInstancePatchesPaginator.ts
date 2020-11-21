
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeInstancePatchesCommand,
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "../commands/DescribeInstancePatchesCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstancePatchesCommandInput,
  ...args: any
): Promise<DescribeInstancePatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancePatchesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeInstancePatchesCommandInput,
  ...args: any
): Promise<DescribeInstancePatchesCommandOutput> => {
  // @ts-ignore
  return await client.describeInstancePatches(input, ...args);
};
export async function* paginateDescribeInstancePatches(
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancePatchesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancePatchesCommandOutput;
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
