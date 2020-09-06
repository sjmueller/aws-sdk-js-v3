
import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import {
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "../commands/GetUpgradeHistoryCommand.ts";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: GetUpgradeHistoryCommandInput,
  ...args: any
): Promise<GetUpgradeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUpgradeHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: GetUpgradeHistoryCommandInput,
  ...args: any
): Promise<GetUpgradeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getUpgradeHistory(input, ...args);
};
export async function* getUpgradeHistoryPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: GetUpgradeHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetUpgradeHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetUpgradeHistoryCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
