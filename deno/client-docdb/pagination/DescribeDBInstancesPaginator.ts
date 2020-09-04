import { DocDB } from "../DocDB.ts";
import { DocDBClient } from "../DocDBClient.ts";
import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand.ts";
import { DocDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeDBInstancesCommandInput,
  ...args: any
): Promise<DescribeDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: DocDB,
  input: DescribeDBInstancesCommandInput,
  ...args: any
): Promise<DescribeDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBInstances(input, ...args);
};
export async function* describeDBInstancesPaginate(
  config: DocDBPaginationConfiguration,
  input: DescribeDBInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBInstancesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
