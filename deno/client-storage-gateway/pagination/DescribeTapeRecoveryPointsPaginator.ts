
import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import {
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "../commands/DescribeTapeRecoveryPointsCommand.ts";
import { StorageGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...args: any
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapeRecoveryPointsCommand(input, ...args));
};
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...args: any
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.describeTapeRecoveryPoints(input, ...args);
};
export async function* describeTapeRecoveryPointsPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapeRecoveryPointsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeTapeRecoveryPointsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
