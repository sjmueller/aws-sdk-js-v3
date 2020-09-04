import { LexModelBuildingService } from "../LexModelBuildingService.ts";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient.ts";
import {
  GetIntentVersionsCommand,
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput,
} from "../commands/GetIntentVersionsCommand.ts";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetIntentVersionsCommandInput,
  ...args: any
): Promise<GetIntentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetIntentVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetIntentVersionsCommandInput,
  ...args: any
): Promise<GetIntentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.getIntentVersions(input, ...args);
};
export async function* getIntentVersionsPaginate(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetIntentVersionsCommandInput,
  ...additionalArguments: any
): Paginator<GetIntentVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetIntentVersionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
