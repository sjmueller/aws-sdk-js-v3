
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterBacktracksCommandInput,
  DescribeDBClusterBacktracksCommandOutput,
} from "../commands/DescribeDBClusterBacktracksCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterBacktracksCommandInput,
  ...args: any
): Promise<DescribeDBClusterBacktracksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterBacktracksCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBClusterBacktracksCommandInput,
  ...args: any
): Promise<DescribeDBClusterBacktracksCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterBacktracks(input, ...args);
};
export async function* describeDBClusterBacktracksPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterBacktracksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterBacktracksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBClusterBacktracksCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
