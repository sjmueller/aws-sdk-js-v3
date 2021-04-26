import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { DeleteCustomVerificationEmailTemplateRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand,
  serializeAws_queryDeleteCustomVerificationEmailTemplateCommand,
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

export interface DeleteCustomVerificationEmailTemplateCommandInput
  extends DeleteCustomVerificationEmailTemplateRequest {}
export interface DeleteCustomVerificationEmailTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an existing custom verification email template. </p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class DeleteCustomVerificationEmailTemplateCommand extends $Command<
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCustomVerificationEmailTemplateCommandInput) {
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
  ): Handler<DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteCustomVerificationEmailTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomVerificationEmailTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteCustomVerificationEmailTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCustomVerificationEmailTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> {
    return deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
