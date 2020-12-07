import { Ivs } from "../Ivs.ts";
import { IvsClient } from "../IvsClient.ts";
import {
  ListPlaybackKeyPairsCommand,
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "../commands/ListPlaybackKeyPairsCommand.ts";
import { IvsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListPlaybackKeyPairsCommandInput,
  ...args: any
): Promise<ListPlaybackKeyPairsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlaybackKeyPairsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Ivs,
  input: ListPlaybackKeyPairsCommandInput,
  ...args: any
): Promise<ListPlaybackKeyPairsCommandOutput> => {
  // @ts-ignore
  return await client.listPlaybackKeyPairs(input, ...args);
};
export async function* paginateListPlaybackKeyPairs(
  config: IvsPaginationConfiguration,
  input: ListPlaybackKeyPairsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlaybackKeyPairsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlaybackKeyPairsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Ivs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IvsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivs | IvsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
