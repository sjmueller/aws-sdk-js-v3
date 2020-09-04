import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "../commands/GetAssetPropertyAggregatesCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: GetAssetPropertyAggregatesCommandInput,
  ...args: any
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAssetPropertyAggregatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: GetAssetPropertyAggregatesCommandInput,
  ...args: any
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.getAssetPropertyAggregates(input, ...args);
};
export async function* getAssetPropertyAggregatesPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: GetAssetPropertyAggregatesCommandInput,
  ...additionalArguments: any
): Paginator<GetAssetPropertyAggregatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetAssetPropertyAggregatesCommandOutput;
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
