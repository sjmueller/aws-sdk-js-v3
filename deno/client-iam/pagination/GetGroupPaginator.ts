import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: GetGroupCommandInput,
  ...args: any
): Promise<GetGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetGroupCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: GetGroupCommandInput,
  ...args: any
): Promise<GetGroupCommandOutput> => {
  // @ts-ignore
  return await client.getGroup(input, ...args);
};
export async function* getGroupPaginate(
  config: IAMPaginationConfiguration,
  input: GetGroupCommandInput,
  ...additionalArguments: any
): Paginator<GetGroupCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetGroupCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
