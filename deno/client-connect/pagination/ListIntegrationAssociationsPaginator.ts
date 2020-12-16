import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import {
  ListIntegrationAssociationsCommand,
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "../commands/ListIntegrationAssociationsCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListIntegrationAssociationsCommandInput,
  ...args: any
): Promise<ListIntegrationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIntegrationAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListIntegrationAssociationsCommandInput,
  ...args: any
): Promise<ListIntegrationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listIntegrationAssociations(input, ...args);
};
export async function* paginateListIntegrationAssociations(
  config: ConnectPaginationConfiguration,
  input: ListIntegrationAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListIntegrationAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIntegrationAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
