import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  GetAggregateDiscoveredResourceCountsCommand,
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "../commands/GetAggregateDiscoveredResourceCountsCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetAggregateDiscoveredResourceCountsCommandInput,
  ...args: any
): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAggregateDiscoveredResourceCountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetAggregateDiscoveredResourceCountsCommandInput,
  ...args: any
): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> => {
  // @ts-ignore
  return await client.getAggregateDiscoveredResourceCounts(input, ...args);
};
export async function* paginateGetAggregateDiscoveredResourceCounts(
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateDiscoveredResourceCountsCommandInput,
  ...additionalArguments: any
): Paginator<GetAggregateDiscoveredResourceCountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAggregateDiscoveredResourceCountsCommandOutput;
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
