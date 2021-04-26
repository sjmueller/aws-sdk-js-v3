import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { SendBounceRequest, SendBounceResponse } from "../models/models_0.ts";
import { deserializeAws_querySendBounceCommand, serializeAws_querySendBounceCommand } from "../protocols/Aws_query.ts";
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

export interface SendBounceCommandInput extends SendBounceRequest {}
export interface SendBounceCommandOutput extends SendBounceResponse, __MetadataBearer {}

/**
 * <p>Generates and sends a bounce message to the sender of an email you received through
 *             Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p>
 *         <note>
 *             <p>You cannot use this API to send generic bounces for mail that was not received by
 *                 Amazon SES.</p>
 *         </note>
 *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class SendBounceCommand extends $Command<
  SendBounceCommandInput,
  SendBounceCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendBounceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBounceCommandInput, SendBounceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendBounceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendBounceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendBounceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendBounceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendBounceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBounceCommandOutput> {
    return deserializeAws_querySendBounceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
