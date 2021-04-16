import { Mgn } from "../Mgn.ts";
import { MgnClient } from "../MgnClient.ts";
import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand.ts";
import { MgnPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...args: any
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationConfigurationTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Mgn,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...args: any
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationConfigurationTemplates(input, ...args);
};
export async function* paginateDescribeReplicationConfigurationTemplates(
  config: MgnPaginationConfiguration,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationConfigurationTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationConfigurationTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Mgn) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
