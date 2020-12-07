import { SMS } from "../SMS.ts";
import { SMSClient } from "../SMSClient.ts";
import {
  GetReplicationJobsCommand,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
} from "../commands/GetReplicationJobsCommand.ts";
import { SMSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SMSClient,
  input: GetReplicationJobsCommandInput,
  ...args: any
): Promise<GetReplicationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReplicationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SMS,
  input: GetReplicationJobsCommandInput,
  ...args: any
): Promise<GetReplicationJobsCommandOutput> => {
  // @ts-ignore
  return await client.getReplicationJobs(input, ...args);
};
export async function* paginateGetReplicationJobs(
  config: SMSPaginationConfiguration,
  input: GetReplicationJobsCommandInput,
  ...additionalArguments: any
): Paginator<GetReplicationJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReplicationJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SMS | SMSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
