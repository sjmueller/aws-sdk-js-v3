import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { ListGeofencesRequest, ListGeofencesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListGeofencesCommand,
  serializeAws_restJson1ListGeofencesCommand,
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

export interface ListGeofencesCommandInput extends ListGeofencesRequest {}
export interface ListGeofencesCommandOutput extends ListGeofencesResponse, __MetadataBearer {}

/**
 * <p>Lists geofences stored in a given geofence collection.</p>
 */
export class ListGeofencesCommand extends $Command<
  ListGeofencesCommandInput,
  ListGeofencesCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGeofencesCommandInput) {
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
  ): Handler<ListGeofencesCommandInput, ListGeofencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListGeofencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGeofencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGeofencesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGeofencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGeofencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGeofencesCommandOutput> {
    return deserializeAws_restJson1ListGeofencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
