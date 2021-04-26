import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { CreateConfigurationSetRequest, CreateConfigurationSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateConfigurationSetCommand,
  serializeAws_queryCreateConfigurationSetCommand,
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

export interface CreateConfigurationSetCommandInput extends CreateConfigurationSetRequest {}
export interface CreateConfigurationSetCommandOutput extends CreateConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Creates a configuration set.</p>
 *         <p>Configuration sets enable you to publish email sending events. For information about
 *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class CreateConfigurationSetCommand extends $Command<
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateConfigurationSetCommandInput) {
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
  ): Handler<CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateConfigurationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConfigurationSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateConfigurationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConfigurationSetCommandOutput> {
    return deserializeAws_queryCreateConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
