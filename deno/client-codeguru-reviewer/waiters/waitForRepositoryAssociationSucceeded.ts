import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient.ts";
import {
  DescribeRepositoryAssociationCommand,
  DescribeRepositoryAssociationCommandInput,
} from "../commands/DescribeRepositoryAssociationCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (
  client: CodeGuruReviewerClient,
  input: DescribeRepositoryAssociationCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeRepositoryAssociationCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.RepositoryAssociation.State;
      };
      if (returnComparator() === "Associated") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.RepositoryAssociation.State;
      };
      if (returnComparator() === "Associating") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a repository association is complete.
 *  @deprecated Use waitUntilRepositoryAssociationSucceeded instead. waitForRepositoryAssociationSucceeded does not throw error in non-success cases.
 */
export const waitForRepositoryAssociationSucceeded = async (
  params: WaiterConfiguration<CodeGuruReviewerClient>,
  input: DescribeRepositoryAssociationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a repository association is complete.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeRepositoryAssociationCommand for polling.
 */
export const waitUntilRepositoryAssociationSucceeded = async (
  params: WaiterConfiguration<CodeGuruReviewerClient>,
  input: DescribeRepositoryAssociationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
