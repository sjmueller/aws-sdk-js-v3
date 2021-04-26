import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { ListTrackerConsumersRequest, ListTrackerConsumersResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListTrackerConsumersCommand,
  serializeAws_restJson1ListTrackerConsumersCommand,
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

export interface ListTrackerConsumersCommandInput extends ListTrackerConsumersRequest {}
export interface ListTrackerConsumersCommandOutput extends ListTrackerConsumersResponse, __MetadataBearer {}

/**
 * <p>Lists geofence collections currently associated to the given tracker resource.</p>
 */
export class ListTrackerConsumersCommand extends $Command<
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrackerConsumersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrackerConsumersCommandInput, ListTrackerConsumersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListTrackerConsumersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrackerConsumersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrackerConsumersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrackerConsumersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTrackerConsumersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrackerConsumersCommandOutput> {
    return deserializeAws_restJson1ListTrackerConsumersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
