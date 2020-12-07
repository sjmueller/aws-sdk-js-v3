import { LexModelBuildingService } from "../LexModelBuildingService.ts";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient.ts";
import {
  GetBuiltinSlotTypesCommand,
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "../commands/GetBuiltinSlotTypesCommand.ts";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBuiltinSlotTypesCommandInput,
  ...args: any
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBuiltinSlotTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBuiltinSlotTypesCommandInput,
  ...args: any
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.getBuiltinSlotTypes(input, ...args);
};
export async function* paginateGetBuiltinSlotTypes(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinSlotTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetBuiltinSlotTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBuiltinSlotTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
