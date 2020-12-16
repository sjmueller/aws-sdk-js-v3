import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import { DescribeAssetCommand, DescribeAssetCommandInput } from "../commands/DescribeAssetCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: IoTSiteWiseClient, input: DescribeAssetCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAssetCommand(input));
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAssetCommand for polling.
 */
export const waitForAssetNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
