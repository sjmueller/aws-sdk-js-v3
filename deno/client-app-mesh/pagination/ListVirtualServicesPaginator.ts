import { AppMesh } from "../AppMesh.ts";
import { AppMeshClient } from "../AppMeshClient.ts";
import {
  ListVirtualServicesCommand,
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "../commands/ListVirtualServicesCommand.ts";
import { AppMeshPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListVirtualServicesCommandInput,
  ...args: any
): Promise<ListVirtualServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualServicesCommand(input, ...args));
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListVirtualServicesCommandInput,
  ...args: any
): Promise<ListVirtualServicesCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualServices(input, ...args);
};
export async function* listVirtualServicesPaginate(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualServicesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListVirtualServicesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof AppMesh) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppMeshClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppMesh | AppMeshClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
