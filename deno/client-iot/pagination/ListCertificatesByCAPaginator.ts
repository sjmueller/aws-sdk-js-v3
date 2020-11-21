
import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListCertificatesByCACommand,
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "../commands/ListCertificatesByCACommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListCertificatesByCACommandInput,
  ...args: any
): Promise<ListCertificatesByCACommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesByCACommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListCertificatesByCACommandInput,
  ...args: any
): Promise<ListCertificatesByCACommandOutput> => {
  // @ts-ignore
  return await client.listCertificatesByCA(input, ...args);
};
export async function* paginateListCertificatesByCA(
  config: IoTPaginationConfiguration,
  input: ListCertificatesByCACommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesByCACommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesByCACommandOutput;
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
