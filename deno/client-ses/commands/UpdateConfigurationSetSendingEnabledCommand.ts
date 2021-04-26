import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { UpdateConfigurationSetSendingEnabledRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand,
  serializeAws_queryUpdateConfigurationSetSendingEnabledCommand,
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

export interface UpdateConfigurationSetSendingEnabledCommandInput extends UpdateConfigurationSetSendingEnabledRequest {}
export interface UpdateConfigurationSetSendingEnabledCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables email sending for messages sent using a specific configuration set
 *             in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms
 *             to temporarily pause email sending for a configuration set when the reputation metrics
 *             for that configuration set (such as your bounce on complaint rate) exceed certain
 *             thresholds.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class UpdateConfigurationSetSendingEnabledCommand extends $Command<
  UpdateConfigurationSetSendingEnabledCommandInput,
  UpdateConfigurationSetSendingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigurationSetSendingEnabledCommandInput) {
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
  ): Handler<UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateConfigurationSetSendingEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigurationSetSendingEnabledRequest.filterSensitiveLog,
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
    input: UpdateConfigurationSetSendingEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateConfigurationSetSendingEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> {
    return deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
