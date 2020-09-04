import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListPortalsCommand,
  ListPortalsCommandInput,
  ListPortalsCommandOutput,
} from "../commands/ListPortalsCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListPortalsCommandInput,
  ...args: any
): Promise<ListPortalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPortalsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListPortalsCommandInput,
  ...args: any
): Promise<ListPortalsCommandOutput> => {
  // @ts-ignore
  return await client.listPortals(input, ...args);
};
export async function* listPortalsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListPortalsCommandInput,
  ...additionalArguments: any
): Paginator<ListPortalsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPortalsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
