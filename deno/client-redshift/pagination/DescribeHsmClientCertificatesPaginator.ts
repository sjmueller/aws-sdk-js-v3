
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeHsmClientCertificatesCommand,
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "../commands/DescribeHsmClientCertificatesCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeHsmClientCertificatesCommandInput,
  ...args: any
): Promise<DescribeHsmClientCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeHsmClientCertificatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeHsmClientCertificatesCommandInput,
  ...args: any
): Promise<DescribeHsmClientCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.describeHsmClientCertificates(input, ...args);
};
export async function* paginateDescribeHsmClientCertificates(
  config: RedshiftPaginationConfiguration,
  input: DescribeHsmClientCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeHsmClientCertificatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeHsmClientCertificatesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
