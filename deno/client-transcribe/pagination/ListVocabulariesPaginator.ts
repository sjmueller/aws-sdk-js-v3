import { Transcribe } from "../Transcribe.ts";
import { TranscribeClient } from "../TranscribeClient.ts";
import {
  ListVocabulariesCommand,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
} from "../commands/ListVocabulariesCommand.ts";
import { TranscribePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListVocabulariesCommandInput,
  ...args: any
): Promise<ListVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVocabulariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transcribe,
  input: ListVocabulariesCommandInput,
  ...args: any
): Promise<ListVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.listVocabularies(input, ...args);
};
export async function* paginateListVocabularies(
  config: TranscribePaginationConfiguration,
  input: ListVocabulariesCommandInput,
  ...additionalArguments: any
): Paginator<ListVocabulariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVocabulariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transcribe) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
