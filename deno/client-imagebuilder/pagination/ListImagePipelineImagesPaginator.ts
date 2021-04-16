import { Imagebuilder } from "../Imagebuilder.ts";
import { ImagebuilderClient } from "../ImagebuilderClient.ts";
import {
  ListImagePipelineImagesCommand,
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "../commands/ListImagePipelineImagesCommand.ts";
import { ImagebuilderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImagePipelineImagesCommandInput,
  ...args: any
): Promise<ListImagePipelineImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImagePipelineImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImagePipelineImagesCommandInput,
  ...args: any
): Promise<ListImagePipelineImagesCommandOutput> => {
  // @ts-ignore
  return await client.listImagePipelineImages(input, ...args);
};
export async function* paginateListImagePipelineImages(
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePipelineImagesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagePipelineImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagePipelineImagesCommandOutput;
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
