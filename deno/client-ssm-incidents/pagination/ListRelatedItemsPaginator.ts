import { SSMIncidents } from "../SSMIncidents.ts";
import { SSMIncidentsClient } from "../SSMIncidentsClient.ts";
import {
  ListRelatedItemsCommand,
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput,
} from "../commands/ListRelatedItemsCommand.ts";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMIncidentsClient,
  input: ListRelatedItemsCommandInput,
  ...args: any
): Promise<ListRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRelatedItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSMIncidents,
  input: ListRelatedItemsCommandInput,
  ...args: any
): Promise<ListRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.listRelatedItems(input, ...args);
};
export async function* paginateListRelatedItems(
  config: SSMIncidentsPaginationConfiguration,
  input: ListRelatedItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListRelatedItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRelatedItemsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSMIncidents) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMIncidentsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMIncidents | SSMIncidentsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
