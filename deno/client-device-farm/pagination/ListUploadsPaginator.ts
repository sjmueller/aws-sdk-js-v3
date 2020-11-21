
import { DeviceFarm } from "../DeviceFarm.ts";
import { DeviceFarmClient } from "../DeviceFarmClient.ts";
import { ListUploadsCommand, ListUploadsCommandInput, ListUploadsCommandOutput } from "../commands/ListUploadsCommand.ts";
import { DeviceFarmPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListUploadsCommandInput,
  ...args: any
): Promise<ListUploadsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUploadsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListUploadsCommandInput,
  ...args: any
): Promise<ListUploadsCommandOutput> => {
  // @ts-ignore
  return await client.listUploads(input, ...args);
};
export async function* paginateListUploads(
  config: DeviceFarmPaginationConfiguration,
  input: ListUploadsCommandInput,
  ...additionalArguments: any
): Paginator<ListUploadsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUploadsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
