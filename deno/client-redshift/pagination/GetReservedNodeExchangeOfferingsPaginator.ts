import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  GetReservedNodeExchangeOfferingsCommand,
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "../commands/GetReservedNodeExchangeOfferingsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: GetReservedNodeExchangeOfferingsCommandInput,
  ...args: any
): Promise<GetReservedNodeExchangeOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReservedNodeExchangeOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: GetReservedNodeExchangeOfferingsCommandInput,
  ...args: any
): Promise<GetReservedNodeExchangeOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.getReservedNodeExchangeOfferings(input, ...args);
};
export async function* paginateGetReservedNodeExchangeOfferings(
  config: RedshiftPaginationConfiguration,
  input: GetReservedNodeExchangeOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<GetReservedNodeExchangeOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReservedNodeExchangeOfferingsCommandOutput;
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
