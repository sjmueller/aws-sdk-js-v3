import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient.ts";
import { marshallInput, unmarshallOutput } from "../commands/utils.ts";
import {
  GetItemCommand as __GetItemCommand,
  GetItemCommandInput as __GetItemCommandInput,
  GetItemCommandOutput as __GetItemCommandOutput,
} from "../../client-dynamodb/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "../../types/mod.ts";
import { NativeAttributeValue } from "../../util-dynamodb/mod.ts";

export type GetCommandInput = Omit<__GetItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type GetCommandOutput = Omit<__GetItemCommandOutput, "Item"> & {
  Item?: { [key: string]: NativeAttributeValue };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * GetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class GetCommand extends $Command<GetCommandInput, GetCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  private readonly inputKeyNodes = [{ key: "Key" }];
  private readonly outputKeyNodes = [{ key: "Item" }];

  constructor(readonly input: GetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommandInput, GetCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __GetItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
