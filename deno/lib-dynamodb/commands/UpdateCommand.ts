import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient.ts";
import { marshallInput, unmarshallOutput } from "../commands/utils.ts";
import {
  AttributeValueUpdate,
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  UpdateItemCommand as __UpdateItemCommand,
  UpdateItemCommandInput as __UpdateItemCommandInput,
  UpdateItemCommandOutput as __UpdateItemCommandOutput,
} from "../../client-dynamodb/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "../../types/mod.ts";
import { NativeAttributeValue } from "../../util-dynamodb/mod.ts";

export type UpdateCommandInput = Omit<
  __UpdateItemCommandInput,
  "Key" | "AttributeUpdates" | "Expected" | "ExpressionAttributeValues"
> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
  AttributeUpdates?: {
    [key: string]: Omit<AttributeValueUpdate, "Value"> & {
      Value?: NativeAttributeValue;
    };
  };
  Expected?: {
    [key: string]: Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    };
  };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type UpdateCommandOutput = Omit<__UpdateItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: { [key: string]: NativeAttributeValue };
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * UpdateItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class UpdateCommand extends $Command<
  UpdateCommandInput,
  UpdateCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [
    { key: "Key" },
    {
      key: "AttributeUpdates",
      children: {
        children: [{ key: "Value" }],
      },
    },
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

  constructor(readonly input: UpdateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCommandInput, UpdateCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __UpdateItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
