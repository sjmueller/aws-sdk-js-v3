import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient.ts";
import { CreateEventBusRequest, CreateEventBusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateEventBusCommand,
  serializeAws_json1_1CreateEventBusCommand,
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

export interface CreateEventBusCommandInput extends CreateEventBusRequest {}
export interface CreateEventBusCommandOutput extends CreateEventBusResponse, __MetadataBearer {}

/**
 * <p>Creates a new event bus within your account. This can be a custom event bus which you can
 *       use to receive events from your custom applications and services, or it can be a partner event
 *       bus which can be matched to a partner event source.</p>
 */
export class CreateEventBusCommand extends $Command<
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEventBusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventBusCommandInput, CreateEventBusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "CreateEventBusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventBusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventBusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventBusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEventBusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventBusCommandOutput> {
    return deserializeAws_json1_1CreateEventBusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
