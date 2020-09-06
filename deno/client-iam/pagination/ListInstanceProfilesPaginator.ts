
import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListInstanceProfilesCommandInput,
  ...args: any
): Promise<ListInstanceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceProfilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListInstanceProfilesCommandInput,
  ...args: any
): Promise<ListInstanceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceProfiles(input, ...args);
};
export async function* listInstanceProfilesPaginate(
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListInstanceProfilesCommandOutput;
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
