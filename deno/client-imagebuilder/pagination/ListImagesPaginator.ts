import { Imagebuilder } from "../Imagebuilder.ts";
import { ImagebuilderClient } from "../ImagebuilderClient.ts";
import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand.ts";
import { ImagebuilderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImagesCommandInput,
  ...args: any
): Promise<ListImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImagesCommandInput,
  ...args: any
): Promise<ListImagesCommandOutput> => {
  // @ts-ignore
  return await client.listImages(input, ...args);
};
export async function* paginateListImages(
  config: ImagebuilderPaginationConfiguration,
  input: ListImagesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagesCommandOutput;
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
