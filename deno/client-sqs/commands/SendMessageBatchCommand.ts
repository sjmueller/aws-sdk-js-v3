import {
  SQSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SQSClient.ts";
import {
  SendMessageBatchRequest,
  SendMessageBatchResult
} from "../models/index.ts";
import {
  deserializeAws_querySendMessageBatchCommand,
  serializeAws_querySendMessageBatchCommand
} from "../protocols/Aws_query.ts";
import { getSendMessageBatchPlugin } from "../../middleware-sdk-sqs/mod.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type SendMessageBatchCommandInput = SendMessageBatchRequest;
export type SendMessageBatchCommandOutput = SendMessageBatchResult &
  __MetadataBearer;

export class SendMessageBatchCommand extends $Command<
  SendMessageBatchCommandInput,
  SendMessageBatchCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendMessageBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendMessageBatchCommandInput, SendMessageBatchCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getSendMessageBatchPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SendMessageBatchCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySendMessageBatchCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendMessageBatchCommandOutput> {
    return deserializeAws_querySendMessageBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
