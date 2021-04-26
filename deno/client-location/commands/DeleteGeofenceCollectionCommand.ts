import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { DeleteGeofenceCollectionRequest, DeleteGeofenceCollectionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteGeofenceCollectionCommand,
  serializeAws_restJson1DeleteGeofenceCollectionCommand,
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

export interface DeleteGeofenceCollectionCommandInput extends DeleteGeofenceCollectionRequest {}
export interface DeleteGeofenceCollectionCommandOutput extends DeleteGeofenceCollectionResponse, __MetadataBearer {}

/**
 * <p>Deletes a geofence collection from your AWS account.</p>
 *         <note>
 *             <p>This action deletes the resource permanently. You can't undo this action. If the
 *                 geofence collection is the target of a tracker resource, the devices will no longer
 *                 be monitored.</p>
 *         </note>
 */
export class DeleteGeofenceCollectionCommand extends $Command<
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGeofenceCollectionCommandInput) {
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
  ): Handler<DeleteGeofenceCollectionCommandInput, DeleteGeofenceCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DeleteGeofenceCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGeofenceCollectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGeofenceCollectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGeofenceCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteGeofenceCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGeofenceCollectionCommandOutput> {
    return deserializeAws_restJson1DeleteGeofenceCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
