import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import {
  ListPackagesForDomainCommand,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "../commands/ListPackagesForDomainCommand.ts";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListPackagesForDomainCommandInput,
  ...args: any
): Promise<ListPackagesForDomainCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagesForDomainCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: ListPackagesForDomainCommandInput,
  ...args: any
): Promise<ListPackagesForDomainCommandOutput> => {
  // @ts-ignore
  return await client.listPackagesForDomain(input, ...args);
};
export async function* listPackagesForDomainPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListPackagesForDomainCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagesForDomainCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPackagesForDomainCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
