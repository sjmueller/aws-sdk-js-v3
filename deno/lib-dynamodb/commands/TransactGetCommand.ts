import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient.ts";
import { marshallInput, unmarshallOutput } from "../commands/utils.ts";
import {
  Get,
  ItemResponse,
  TransactGetItem,
  TransactGetItemsCommand as __TransactGetItemsCommand,
  TransactGetItemsCommandInput as __TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput as __TransactGetItemsCommandOutput,
} from "../../client-dynamodb/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "../../types/mod.ts";
import { NativeAttributeValue } from "../../util-dynamodb/mod.ts";

export type TransactGetCommandInput = Omit<__TransactGetItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactGetItem, "Get"> & {
        Get:
          | (Omit<Get, "Key"> & {
              Key: { [key: string]: NativeAttributeValue } | undefined;
            })
          | undefined;
      })[]
    | undefined;
};

export type TransactGetCommandOutput = Omit<__TransactGetItemsCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & {
    Item?: { [key: string]: NativeAttributeValue };
  })[];
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactGetItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class TransactGetCommand extends $Command<
  TransactGetCommandInput,
  TransactGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [{ key: "TransactItems", children: [{ key: "Get", children: [{ key: "Key" }] }] }];
  private readonly outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];

  constructor(readonly input: TransactGetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransactGetCommandInput, TransactGetCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __TransactGetItemsCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
