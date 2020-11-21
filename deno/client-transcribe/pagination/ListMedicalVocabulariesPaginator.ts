
import { Transcribe } from "../Transcribe.ts";
import { TranscribeClient } from "../TranscribeClient.ts";
import {
  ListMedicalVocabulariesCommand,
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "../commands/ListMedicalVocabulariesCommand.ts";
import { TranscribePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListMedicalVocabulariesCommandInput,
  ...args: any
): Promise<ListMedicalVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMedicalVocabulariesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Transcribe,
  input: ListMedicalVocabulariesCommandInput,
  ...args: any
): Promise<ListMedicalVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.listMedicalVocabularies(input, ...args);
};
export async function* paginateListMedicalVocabularies(
  config: TranscribePaginationConfiguration,
  input: ListMedicalVocabulariesCommandInput,
  ...additionalArguments: any
): Paginator<ListMedicalVocabulariesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMedicalVocabulariesCommandOutput;
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
