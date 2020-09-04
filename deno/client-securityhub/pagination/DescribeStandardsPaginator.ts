import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import {
  DescribeStandardsCommand,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
} from "../commands/DescribeStandardsCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeStandardsCommandInput,
  ...args: any
): Promise<DescribeStandardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStandardsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeStandardsCommandInput,
  ...args: any
): Promise<DescribeStandardsCommandOutput> => {
  // @ts-ignore
  return await client.describeStandards(input, ...args);
};
export async function* describeStandardsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStandardsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeStandardsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
