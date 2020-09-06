
import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import {
  GetContentModerationCommand,
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "../commands/GetContentModerationCommand.ts";
import { RekognitionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetContentModerationCommandInput,
  ...args: any
): Promise<GetContentModerationCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetContentModerationCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: GetContentModerationCommandInput,
  ...args: any
): Promise<GetContentModerationCommandOutput> => {
  // @ts-ignore
  return await client.getContentModeration(input, ...args);
};
export async function* getContentModerationPaginate(
  config: RekognitionPaginationConfiguration,
  input: GetContentModerationCommandInput,
  ...additionalArguments: any
): Paginator<GetContentModerationCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetContentModerationCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Rekognition) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
