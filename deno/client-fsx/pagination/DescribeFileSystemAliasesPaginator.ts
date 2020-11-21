
import { FSx } from "../FSx.ts";
import { FSxClient } from "../FSxClient.ts";
import {
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "../commands/DescribeFileSystemAliasesCommand.ts";
import { FSxPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeFileSystemAliasesCommandInput,
  ...args: any
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileSystemAliasesCommand(input), ...args);
};
const makePagedRequest = async (
  client: FSx,
  input: DescribeFileSystemAliasesCommandInput,
  ...args: any
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  // @ts-ignore
  return await client.describeFileSystemAliases(input, ...args);
};
export async function* paginateDescribeFileSystemAliases(
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemAliasesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileSystemAliasesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFileSystemAliasesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSx) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
