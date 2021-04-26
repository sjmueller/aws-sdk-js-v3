import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { DescribeGeofenceCollectionRequest, DescribeGeofenceCollectionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeGeofenceCollectionCommand,
  serializeAws_restJson1DescribeGeofenceCollectionCommand,
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

export interface DescribeGeofenceCollectionCommandInput extends DescribeGeofenceCollectionRequest {}
export interface DescribeGeofenceCollectionCommandOutput extends DescribeGeofenceCollectionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the geofence collection details.</p>
 */
export class DescribeGeofenceCollectionCommand extends $Command<
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGeofenceCollectionCommandInput) {
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
  ): Handler<DescribeGeofenceCollectionCommandInput, DescribeGeofenceCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DescribeGeofenceCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGeofenceCollectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGeofenceCollectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGeofenceCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeGeofenceCollectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGeofenceCollectionCommandOutput> {
    return deserializeAws_restJson1DescribeGeofenceCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
