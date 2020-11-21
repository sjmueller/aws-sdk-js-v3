
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  ListCrawlersCommand,
  ListCrawlersCommandInput,
  ListCrawlersCommandOutput,
} from "../commands/ListCrawlersCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: ListCrawlersCommandInput,
  ...args: any
): Promise<ListCrawlersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCrawlersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: ListCrawlersCommandInput,
  ...args: any
): Promise<ListCrawlersCommandOutput> => {
  // @ts-ignore
  return await client.listCrawlers(input, ...args);
};
export async function* paginateListCrawlers(
  config: GluePaginationConfiguration,
  input: ListCrawlersCommandInput,
  ...additionalArguments: any
): Paginator<ListCrawlersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCrawlersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
