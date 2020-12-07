import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry.ts";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient.ts";
import {
  ListAssociatedResourcesCommand,
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
} from "../commands/ListAssociatedResourcesCommand.ts";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogAppRegistryClient,
  input: ListAssociatedResourcesCommandInput,
  ...args: any
): Promise<ListAssociatedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalogAppRegistry,
  input: ListAssociatedResourcesCommandInput,
  ...args: any
): Promise<ListAssociatedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedResources(input, ...args);
};
export async function* paginateListAssociatedResources(
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAssociatedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ServiceCatalogAppRegistry) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogAppRegistryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalogAppRegistry | ServiceCatalogAppRegistryClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
