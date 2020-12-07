import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import {
  ListPlatformApplicationsCommand,
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "../commands/ListPlatformApplicationsCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListPlatformApplicationsCommandInput,
  ...args: any
): Promise<ListPlatformApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlatformApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListPlatformApplicationsCommandInput,
  ...args: any
): Promise<ListPlatformApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listPlatformApplications(input, ...args);
};
export async function* paginateListPlatformApplications(
  config: SNSPaginationConfiguration,
  input: ListPlatformApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlatformApplicationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlatformApplicationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
