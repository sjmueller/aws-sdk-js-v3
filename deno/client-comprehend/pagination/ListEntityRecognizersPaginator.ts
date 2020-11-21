
import { Comprehend } from "../Comprehend.ts";
import { ComprehendClient } from "../ComprehendClient.ts";
import {
  ListEntityRecognizersCommand,
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "../commands/ListEntityRecognizersCommand.ts";
import { ComprehendPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListEntityRecognizersCommandInput,
  ...args: any
): Promise<ListEntityRecognizersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntityRecognizersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListEntityRecognizersCommandInput,
  ...args: any
): Promise<ListEntityRecognizersCommandOutput> => {
  // @ts-ignore
  return await client.listEntityRecognizers(input, ...args);
};
export async function* paginateListEntityRecognizers(
  config: ComprehendPaginationConfiguration,
  input: ListEntityRecognizersCommandInput,
  ...additionalArguments: any
): Paginator<ListEntityRecognizersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntityRecognizersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
