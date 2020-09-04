import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import {
  GetTextDetectionCommand,
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput,
} from "../commands/GetTextDetectionCommand.ts";
import { RekognitionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetTextDetectionCommandInput,
  ...args: any
): Promise<GetTextDetectionCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTextDetectionCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: GetTextDetectionCommandInput,
  ...args: any
): Promise<GetTextDetectionCommandOutput> => {
  // @ts-ignore
  return await client.getTextDetection(input, ...args);
};
export async function* getTextDetectionPaginate(
  config: RekognitionPaginationConfiguration,
  input: GetTextDetectionCommandInput,
  ...additionalArguments: any
): Paginator<GetTextDetectionCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetTextDetectionCommandOutput;
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
