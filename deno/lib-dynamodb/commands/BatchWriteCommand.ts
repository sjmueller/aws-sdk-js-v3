import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient.ts";
import { marshallInput, unmarshallOutput } from "../commands/utils.ts";
import {
  DeleteRequest,
  ItemCollectionMetrics,
  PutRequest,
  WriteRequest,
  BatchWriteItemCommand as __BatchWriteItemCommand,
  BatchWriteItemCommandInput as __BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput as __BatchWriteItemCommandOutput,
} from "../../client-dynamodb/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "../../types/mod.ts";
import { NativeAttributeValue } from "../../util-dynamodb/mod.ts";

export type BatchWriteCommandInput = Omit<__BatchWriteItemCommandInput, "RequestItems"> & {
  RequestItems:
    | {
        [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
          PutRequest?: Omit<PutRequest, "Item"> & {
            Item: { [key: string]: NativeAttributeValue } | undefined;
          };
          DeleteRequest?: Omit<DeleteRequest, "Key"> & {
            Key: { [key: string]: NativeAttributeValue } | undefined;
          };
        })[];
      }
    | undefined;
};

export type BatchWriteCommandOutput = Omit<
  __BatchWriteItemCommandOutput,
  "UnprocessedItems" | "ItemCollectionMetrics"
> & {
  UnprocessedItems?: {
    [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
      PutRequest?: Omit<PutRequest, "Item"> & {
        Item: { [key: string]: NativeAttributeValue } | undefined;
      };
      DeleteRequest?: Omit<DeleteRequest, "Key"> & {
        Key: { [key: string]: NativeAttributeValue } | undefined;
      };
    })[];
  };
  ItemCollectionMetrics?: {
    [key: string]: (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
      ItemCollectionKey?: { [key: string]: NativeAttributeValue };
    })[];
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchWriteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class BatchWriteCommand extends $Command<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [
    {
      key: "RequestItems",
      children: {
        children: [
          { key: "PutRequest", children: [{ key: "Item" }] },
          { key: "DeleteRequest", children: [{ key: "Key" }] },
        ],
      },
    },
  ];
  private readonly outputKeyNodes = [
    {
      key: "UnprocessedItems",
      children: {
        children: [
          { key: "PutRequest", children: [{ key: "Item" }] },
          { key: "DeleteRequest", children: [{ key: "Key" }] },
        ],
      },
    },
    {
      key: "ItemCollectionMetrics",
      children: {
        children: [{ key: "ItemCollectionKey" }],
      },
    },
  ];

  constructor(readonly input: BatchWriteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchWriteCommandInput, BatchWriteCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __BatchWriteItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
