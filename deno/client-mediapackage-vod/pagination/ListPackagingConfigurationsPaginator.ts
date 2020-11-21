
import { MediaPackageVod } from "../MediaPackageVod.ts";
import { MediaPackageVodClient } from "../MediaPackageVodClient.ts";
import {
  ListPackagingConfigurationsCommand,
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput,
} from "../commands/ListPackagingConfigurationsCommand.ts";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MediaPackageVodClient,
  input: ListPackagingConfigurationsCommandInput,
  ...args: any
): Promise<ListPackagingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagingConfigurationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaPackageVod,
  input: ListPackagingConfigurationsCommandInput,
  ...args: any
): Promise<ListPackagingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listPackagingConfigurations(input, ...args);
};
export async function* paginateListPackagingConfigurations(
  config: MediaPackageVodPaginationConfiguration,
  input: ListPackagingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagingConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackagingConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackageVod) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaPackageVodClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackageVod | MediaPackageVodClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
