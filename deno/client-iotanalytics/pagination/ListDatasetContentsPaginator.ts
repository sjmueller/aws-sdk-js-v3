import { IoTAnalytics } from "../IoTAnalytics.ts";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient.ts";
import {
  ListDatasetContentsCommand,
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "../commands/ListDatasetContentsCommand.ts";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTAnalyticsClient,
  input: ListDatasetContentsCommandInput,
  ...args: any
): Promise<ListDatasetContentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetContentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTAnalytics,
  input: ListDatasetContentsCommandInput,
  ...args: any
): Promise<ListDatasetContentsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetContents(input, ...args);
};
export async function* paginateListDatasetContents(
  config: IoTAnalyticsPaginationConfiguration,
  input: ListDatasetContentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetContentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetContentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTAnalytics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTAnalyticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTAnalytics | IoTAnalyticsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
