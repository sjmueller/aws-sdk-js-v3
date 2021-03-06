import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient.ts";
import { marshallInput, unmarshallOutput } from "../commands/utils.ts";
import {
  KeysAndAttributes,
  BatchGetItemCommand as __BatchGetItemCommand,
  BatchGetItemCommandInput as __BatchGetItemCommandInput,
  BatchGetItemCommandOutput as __BatchGetItemCommandOutput,
} from "../../client-dynamodb/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "../../types/mod.ts";
import { NativeAttributeValue } from "../../util-dynamodb/mod.ts";

export type BatchGetCommandInput = Omit<__BatchGetItemCommandInput, "RequestItems"> & {
  RequestItems:
    | {
        [key: string]: Omit<KeysAndAttributes, "Keys"> & {
          Keys:
            | {
                [key: string]: NativeAttributeValue;
              }[]
            | undefined;
        };
      }
    | undefined;
};

export type BatchGetCommandOutput = Omit<__BatchGetItemCommandOutput, "Responses" | "UnprocessedKeys"> & {
  Responses?: {
    [key: string]: {
      [key: string]: NativeAttributeValue;
    }[];
  };
  UnprocessedKeys?: {
    [key: string]: Omit<KeysAndAttributes, "Keys"> & {
      Keys:
        | {
            [key: string]: NativeAttributeValue;
          }[]
        | undefined;
    };
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchGetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class BatchGetCommand extends $Command<
  BatchGetCommandInput,
  BatchGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [
    {
      key: "RequestItems",
      children: {
        children: [{ key: "Keys" }],
      },
    },
  ];
  private readonly outputKeyNodes = [
    { key: "Responses", children: {} },
    {
      key: "UnprocessedKeys",
      children: {
        children: [{ key: "Keys" }],
      },
    },
  ];

  constructor(readonly input: BatchGetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetCommandInput, BatchGetCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __BatchGetItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
