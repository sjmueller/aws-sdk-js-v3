
import { Imagebuilder } from "../Imagebuilder.ts";
import { ImagebuilderClient } from "../ImagebuilderClient.ts";
import {
  ListImagePipelinesCommand,
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
} from "../commands/ListImagePipelinesCommand.ts";
import { ImagebuilderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImagePipelinesCommandInput,
  ...args: any
): Promise<ListImagePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImagePipelinesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImagePipelinesCommandInput,
  ...args: any
): Promise<ListImagePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listImagePipelines(input, ...args);
};
export async function* paginateListImagePipelines(
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagePipelinesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagePipelinesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
