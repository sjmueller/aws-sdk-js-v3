import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { UpdateAccountSendingEnabledRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryUpdateAccountSendingEnabledCommand,
  serializeAws_queryUpdateAccountSendingEnabledCommand,
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

export interface UpdateAccountSendingEnabledCommandInput extends UpdateAccountSendingEnabledRequest {}
export interface UpdateAccountSendingEnabledCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables email sending across your entire Amazon SES account in the current
 *             AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
 *             temporarily pause email sending across your Amazon SES account in a given AWS Region when
 *             reputation metrics (such as your bounce or complaint rates) reach certain
 *             thresholds.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class UpdateAccountSendingEnabledCommand extends $Command<
  UpdateAccountSendingEnabledCommandInput,
  UpdateAccountSendingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAccountSendingEnabledCommandInput) {
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
  ): Handler<UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateAccountSendingEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountSendingEnabledRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccountSendingEnabledCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateAccountSendingEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountSendingEnabledCommandOutput> {
    return deserializeAws_queryUpdateAccountSendingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
