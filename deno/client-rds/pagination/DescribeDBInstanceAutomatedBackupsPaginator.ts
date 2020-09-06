
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBInstanceAutomatedBackupsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...args: any
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBInstanceAutomatedBackupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...args: any
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBInstanceAutomatedBackups(input, ...args);
};
export async function* describeDBInstanceAutomatedBackupsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBInstanceAutomatedBackupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBInstanceAutomatedBackupsCommandOutput;
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
