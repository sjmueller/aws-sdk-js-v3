
import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  ListPortfoliosForProductCommand,
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput,
} from "../commands/ListPortfoliosForProductCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListPortfoliosForProductCommandInput,
  ...args: any
): Promise<ListPortfoliosForProductCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPortfoliosForProductCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListPortfoliosForProductCommandInput,
  ...args: any
): Promise<ListPortfoliosForProductCommandOutput> => {
  // @ts-ignore
  return await client.listPortfoliosForProduct(input, ...args);
};
export async function* listPortfoliosForProductPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfoliosForProductCommandInput,
  ...additionalArguments: any
): Paginator<ListPortfoliosForProductCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPortfoliosForProductCommandOutput;
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
