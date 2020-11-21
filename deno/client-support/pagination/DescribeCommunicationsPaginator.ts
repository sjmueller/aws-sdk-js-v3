
import { Support } from "../Support.ts";
import { SupportClient } from "../SupportClient.ts";
import {
  DescribeCommunicationsCommand,
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "../commands/DescribeCommunicationsCommand.ts";
import { SupportPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SupportClient,
  input: DescribeCommunicationsCommandInput,
  ...args: any
): Promise<DescribeCommunicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCommunicationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Support,
  input: DescribeCommunicationsCommandInput,
  ...args: any
): Promise<DescribeCommunicationsCommandOutput> => {
  // @ts-ignore
  return await client.describeCommunications(input, ...args);
};
export async function* paginateDescribeCommunications(
  config: SupportPaginationConfiguration,
  input: DescribeCommunicationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCommunicationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCommunicationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Support) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SupportClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Support | SupportClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
