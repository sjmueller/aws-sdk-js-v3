import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient.ts";
import { ReceiveMessageRequest, ReceiveMessageResult } from "../models/index.ts";
import {
  deserializeAws_queryReceiveMessageCommand,
  serializeAws_queryReceiveMessageCommand,
} from "../protocols/Aws_query.ts";
import { getReceiveMessagePlugin } from "../../middleware-sdk-sqs/mod.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type ReceiveMessageCommandInput = ReceiveMessageRequest;
export type ReceiveMessageCommandOutput = ReceiveMessageResult & __MetadataBearer;

export class ReceiveMessageCommand extends $Command<
  ReceiveMessageCommandInput,
  ReceiveMessageCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReceiveMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReceiveMessageCommandInput, ReceiveMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getReceiveMessagePlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ReceiveMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReceiveMessageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReceiveMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryReceiveMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReceiveMessageCommandOutput> {
    return deserializeAws_queryReceiveMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
