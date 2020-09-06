
import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  SearchProvisionedProductsCommand,
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "../commands/SearchProvisionedProductsCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: SearchProvisionedProductsCommandInput,
  ...args: any
): Promise<SearchProvisionedProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProvisionedProductsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: SearchProvisionedProductsCommandInput,
  ...args: any
): Promise<SearchProvisionedProductsCommandOutput> => {
  // @ts-ignore
  return await client.searchProvisionedProducts(input, ...args);
};
export async function* searchProvisionedProductsPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProvisionedProductsCommandInput,
  ...additionalArguments: any
): Paginator<SearchProvisionedProductsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchProvisionedProductsCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
