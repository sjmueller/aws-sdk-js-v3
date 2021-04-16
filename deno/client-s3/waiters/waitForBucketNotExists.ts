import { S3Client } from "../S3Client.ts";
import { HeadBucketCommand, HeadBucketCommandInput } from "../commands/HeadBucketCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: S3Client, input: HeadBucketCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new HeadBucketCommand(input));
  } catch (exception) {
    if (exception.name && exception.name == "NotFound") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to HeadBucketCommand for polling.
 */
export const waitForBucketNotExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadBucketCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
