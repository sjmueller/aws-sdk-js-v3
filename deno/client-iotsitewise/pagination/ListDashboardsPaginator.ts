import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListDashboardsCommandInput,
  ...args: any
): Promise<ListDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDashboardsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListDashboardsCommandInput,
  ...args: any
): Promise<ListDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.listDashboards(input, ...args);
};
export async function* listDashboardsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...additionalArguments: any
): Paginator<ListDashboardsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDashboardsCommandOutput;
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
