import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient.ts";
import { marshallInput, unmarshallOutput } from "../commands/utils.ts";
import {
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  PutItemCommand as __PutItemCommand,
  PutItemCommandInput as __PutItemCommandInput,
  PutItemCommandOutput as __PutItemCommandOutput,
} from "../../client-dynamodb/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "../../types/mod.ts";
import { NativeAttributeValue } from "../../util-dynamodb/mod.ts";

export type PutCommandInput = Omit<__PutItemCommandInput, "Item" | "Expected" | "ExpressionAttributeValues"> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
  Expected?: {
    [key: string]: Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type PutCommandOutput = Omit<__PutItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: { [key: string]: NativeAttributeValue };
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * PutItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class PutCommand extends $Command<PutCommandInput, PutCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  private readonly inputKeyNodes = [
    { key: "Item" },
    {
      key: "Expected",
      children: {
        children: [{ key: "Value" }, { key: "AttributeValueList" }],
      },
    },
    { key: "ExpressionAttributeValues" },
  ];
  private readonly outputKeyNodes = [
    { key: "Attributes" },
    { key: "ItemCollectionMetrics", children: [{ key: "ItemCollectionKey" }] },
  ];

  constructor(readonly input: PutCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCommandInput, PutCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __PutItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
