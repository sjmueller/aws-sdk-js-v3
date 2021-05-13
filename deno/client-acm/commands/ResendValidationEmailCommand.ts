import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient.ts";
import { ResendValidationEmailRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ResendValidationEmailCommand,
  serializeAws_json1_1ResendValidationEmailCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface ResendValidationEmailCommandInput extends ResendValidationEmailRequest {}
export interface ResendValidationEmailCommandOutput extends __MetadataBearer {}

/**
 * <p>Resends the email that requests domain ownership validation. The domain owner or an
 *       authorized representative must approve the ACM certificate before it can be issued. The
 *       certificate can be approved by clicking a link in the mail to navigate to the Amazon
 *       certificate approval website and then clicking <b>I Approve</b>.
 *       However, the validation email can be blocked by spam filters. Therefore, if you do not receive
 *       the original mail, you can request that the mail be resent within 72 hours of requesting the
 *       ACM certificate. If more than 72 hours have elapsed since your original request or since
 *       your last attempt to resend validation mail, you must request a new certificate. For more
 *       information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ResendValidationEmailCommand } from "../../client-acm/mod.ts";
 * // const { ACMClient, ResendValidationEmailCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ResendValidationEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendValidationEmailCommandInput} for command's `input` shape.
 * @see {@link ResendValidationEmailCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResendValidationEmailCommand extends $Command<
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResendValidationEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendValidationEmailCommandInput, ResendValidationEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ResendValidationEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResendValidationEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResendValidationEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendValidationEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResendValidationEmailCommandOutput> {
    return deserializeAws_json1_1ResendValidationEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
