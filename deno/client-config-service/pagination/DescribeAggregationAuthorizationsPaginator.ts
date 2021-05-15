import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  DescribeAggregationAuthorizationsCommand,
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "../commands/DescribeAggregationAuthorizationsCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeAggregationAuthorizationsCommandInput,
  ...args: any
): Promise<DescribeAggregationAuthorizationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAggregationAuthorizationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeAggregationAuthorizationsCommandInput,
  ...args: any
): Promise<DescribeAggregationAuthorizationsCommandOutput> => {
  // @ts-ignore
  return await client.describeAggregationAuthorizations(input, ...args);
};
export async function* paginateDescribeAggregationAuthorizations(
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregationAuthorizationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAggregationAuthorizationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAggregationAuthorizationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
