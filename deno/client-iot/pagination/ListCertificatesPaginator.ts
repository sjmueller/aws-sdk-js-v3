
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.listCertificates(input, ...args);
};
export async function* paginateListCertificates(
  config: IoTPaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
