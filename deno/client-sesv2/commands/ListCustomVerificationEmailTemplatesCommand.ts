import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import {
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand,
  serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface ListCustomVerificationEmailTemplatesCommandInput extends ListCustomVerificationEmailTemplatesRequest {}
export interface ListCustomVerificationEmailTemplatesCommandOutput
  extends ListCustomVerificationEmailTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the existing custom verification email templates for your account in the current
 *             AWS Region.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class ListCustomVerificationEmailTemplatesCommand extends $Command<
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomVerificationEmailTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListCustomVerificationEmailTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomVerificationEmailTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomVerificationEmailTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListCustomVerificationEmailTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput> {
    return deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
