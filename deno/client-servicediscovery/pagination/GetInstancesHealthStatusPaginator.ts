import { ServiceDiscovery } from "../ServiceDiscovery.ts";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient.ts";
import {
  GetInstancesHealthStatusCommand,
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
} from "../commands/GetInstancesHealthStatusCommand.ts";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: GetInstancesHealthStatusCommandInput,
  ...args: any
): Promise<GetInstancesHealthStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInstancesHealthStatusCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceDiscovery,
  input: GetInstancesHealthStatusCommandInput,
  ...args: any
): Promise<GetInstancesHealthStatusCommandOutput> => {
  // @ts-ignore
  return await client.getInstancesHealthStatus(input, ...args);
};
export async function* getInstancesHealthStatusPaginate(
  config: ServiceDiscoveryPaginationConfiguration,
  input: GetInstancesHealthStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetInstancesHealthStatusCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetInstancesHealthStatusCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ServiceDiscovery) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceDiscoveryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceDiscovery | ServiceDiscoveryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
