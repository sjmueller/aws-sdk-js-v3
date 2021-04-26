import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateTopicRuleDestinationRequest, UpdateTopicRuleDestinationResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1UpdateTopicRuleDestinationCommand,
  serializeAws_restJson1UpdateTopicRuleDestinationCommand,
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

export interface UpdateTopicRuleDestinationCommandInput extends UpdateTopicRuleDestinationRequest {}
export interface UpdateTopicRuleDestinationCommandOutput extends UpdateTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or
 *          confirmation URL of the destination.</p>
 */
export class UpdateTopicRuleDestinationCommand extends $Command<
  UpdateTopicRuleDestinationCommandInput,
  UpdateTopicRuleDestinationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTopicRuleDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTopicRuleDestinationCommandInput, UpdateTopicRuleDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateTopicRuleDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTopicRuleDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTopicRuleDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTopicRuleDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTopicRuleDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTopicRuleDestinationCommandOutput> {
    return deserializeAws_restJson1UpdateTopicRuleDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
