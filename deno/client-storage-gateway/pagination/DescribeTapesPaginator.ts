
import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "../commands/DescribeTapesCommand.ts";
import { StorageGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapesCommandInput,
  ...args: any
): Promise<DescribeTapesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapesCommand(input), ...args);
};
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeTapesCommandInput,
  ...args: any
): Promise<DescribeTapesCommandOutput> => {
  // @ts-ignore
  return await client.describeTapes(input, ...args);
};
export async function* paginateDescribeTapes(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTapesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
