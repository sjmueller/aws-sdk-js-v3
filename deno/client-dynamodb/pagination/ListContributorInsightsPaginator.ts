import { DynamoDB } from "../DynamoDB.ts";
import { DynamoDBClient } from "../DynamoDBClient.ts";
import {
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "../commands/ListContributorInsightsCommand.ts";
import { DynamoDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DynamoDBClient,
  input: ListContributorInsightsCommandInput,
  ...args: any
): Promise<ListContributorInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContributorInsightsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DynamoDB,
  input: ListContributorInsightsCommandInput,
  ...args: any
): Promise<ListContributorInsightsCommandOutput> => {
  // @ts-ignore
  return await client.listContributorInsights(input, ...args);
};
export async function* paginateListContributorInsights(
  config: DynamoDBPaginationConfiguration,
  input: ListContributorInsightsCommandInput,
  ...additionalArguments: any
): Paginator<ListContributorInsightsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContributorInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DynamoDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
