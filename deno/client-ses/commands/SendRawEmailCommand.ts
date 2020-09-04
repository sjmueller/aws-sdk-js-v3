import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { SendRawEmailRequest, SendRawEmailResponse } from "../models/index.ts";
import {
  deserializeAws_querySendRawEmailCommand,
  serializeAws_querySendRawEmailCommand,
} from "../protocols/Aws_query.ts";
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

export type SendRawEmailCommandInput = SendRawEmailRequest;
export type SendRawEmailCommandOutput = SendRawEmailResponse & __MetadataBearer;

export class SendRawEmailCommand extends $Command<
  SendRawEmailCommandInput,
  SendRawEmailCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendRawEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendRawEmailCommandInput, SendRawEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SendRawEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendRawEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendRawEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendRawEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendRawEmailCommandOutput> {
    return deserializeAws_querySendRawEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
