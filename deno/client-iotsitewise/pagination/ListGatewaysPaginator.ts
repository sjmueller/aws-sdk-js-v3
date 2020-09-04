import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewaysCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listGateways(input, ...args);
};
export async function* listGatewaysPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewaysCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListGatewaysCommandOutput;
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
