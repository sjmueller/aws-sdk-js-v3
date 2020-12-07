import { Synthetics } from "../Synthetics.ts";
import { SyntheticsClient } from "../SyntheticsClient.ts";
import {
  DescribeCanariesCommand,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
} from "../commands/DescribeCanariesCommand.ts";
import { SyntheticsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: DescribeCanariesCommandInput,
  ...args: any
): Promise<DescribeCanariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCanariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Synthetics,
  input: DescribeCanariesCommandInput,
  ...args: any
): Promise<DescribeCanariesCommandOutput> => {
  // @ts-ignore
  return await client.describeCanaries(input, ...args);
};
export async function* paginateDescribeCanaries(
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCanariesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCanariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Synthetics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
