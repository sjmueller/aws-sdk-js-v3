import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBLogFilesCommand,
  DescribeDBLogFilesCommandInput,
  DescribeDBLogFilesCommandOutput,
} from "../commands/DescribeDBLogFilesCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBLogFilesCommandInput,
  ...args: any
): Promise<DescribeDBLogFilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBLogFilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBLogFilesCommandInput,
  ...args: any
): Promise<DescribeDBLogFilesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBLogFiles(input, ...args);
};
export async function* describeDBLogFilesPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBLogFilesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBLogFilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBLogFilesCommandOutput;
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
