import { NetworkManager } from "../NetworkManager.ts";
import { NetworkManagerClient } from "../NetworkManagerClient.ts";
import {
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "../commands/GetTransitGatewayRegistrationsCommand.ts";
import { NetworkManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...args: any
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTransitGatewayRegistrationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...args: any
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.getTransitGatewayRegistrations(input, ...args);
};
export async function* getTransitGatewayRegistrationsPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...additionalArguments: any
): Paginator<GetTransitGatewayRegistrationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetTransitGatewayRegistrationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
