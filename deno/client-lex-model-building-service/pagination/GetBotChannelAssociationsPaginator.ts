
import { LexModelBuildingService } from "../LexModelBuildingService.ts";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient.ts";
import {
  GetBotChannelAssociationsCommand,
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "../commands/GetBotChannelAssociationsCommand.ts";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBotChannelAssociationsCommandInput,
  ...args: any
): Promise<GetBotChannelAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBotChannelAssociationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBotChannelAssociationsCommandInput,
  ...args: any
): Promise<GetBotChannelAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getBotChannelAssociations(input, ...args);
};
export async function* getBotChannelAssociationsPaginate(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotChannelAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetBotChannelAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetBotChannelAssociationsCommandOutput;
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
