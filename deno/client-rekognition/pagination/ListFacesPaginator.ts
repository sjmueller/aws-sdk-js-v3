import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import { ListFacesCommand, ListFacesCommandInput, ListFacesCommandOutput } from "../commands/ListFacesCommand.ts";
import { RekognitionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListFacesCommandInput,
  ...args: any
): Promise<ListFacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFacesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: ListFacesCommandInput,
  ...args: any
): Promise<ListFacesCommandOutput> => {
  // @ts-ignore
  return await client.listFaces(input, ...args);
};
export async function* listFacesPaginate(
  config: RekognitionPaginationConfiguration,
  input: ListFacesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListFacesCommandOutput;
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
