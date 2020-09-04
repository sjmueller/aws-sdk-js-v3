import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListServerCertificatesCommand,
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListServerCertificatesCommandInput,
  ...args: any
): Promise<ListServerCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServerCertificatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListServerCertificatesCommandInput,
  ...args: any
): Promise<ListServerCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.listServerCertificates(input, ...args);
};
export async function* listServerCertificatesPaginate(
  config: IAMPaginationConfiguration,
  input: ListServerCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListServerCertificatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListServerCertificatesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
