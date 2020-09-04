import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...args: any
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePendingMaintenanceActionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...args: any
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  // @ts-ignore
  return await client.describePendingMaintenanceActions(input, ...args);
};
export async function* describePendingMaintenanceActionsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePendingMaintenanceActionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribePendingMaintenanceActionsCommandOutput;
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
