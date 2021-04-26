import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { GetEmailTemplateRequest, GetEmailTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetEmailTemplateCommand,
  serializeAws_restJson1GetEmailTemplateCommand,
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

export interface GetEmailTemplateCommandInput extends GetEmailTemplateRequest {}
export interface GetEmailTemplateCommandOutput extends GetEmailTemplateResponse, __MetadataBearer {}

/**
 * <p>Displays the template object (which includes the subject line, HTML part and text
 *             part) for the template you specify.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class GetEmailTemplateCommand extends $Command<
  GetEmailTemplateCommandInput,
  GetEmailTemplateCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEmailTemplateCommandInput) {
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
  ): Handler<GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetEmailTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEmailTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEmailTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEmailTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEmailTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEmailTemplateCommandOutput> {
    return deserializeAws_restJson1GetEmailTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
