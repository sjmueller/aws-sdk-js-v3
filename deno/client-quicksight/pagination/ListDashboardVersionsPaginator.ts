
import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListDashboardVersionsCommandInput,
  ...args: any
): Promise<ListDashboardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDashboardVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListDashboardVersionsCommandInput,
  ...args: any
): Promise<ListDashboardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listDashboardVersions(input, ...args);
};
export async function* listDashboardVersionsPaginate(
  config: QuickSightPaginationConfiguration,
  input: ListDashboardVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDashboardVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDashboardVersionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
