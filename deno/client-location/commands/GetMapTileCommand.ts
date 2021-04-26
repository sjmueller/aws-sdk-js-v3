import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { GetMapTileRequest, GetMapTileResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetMapTileCommand,
  serializeAws_restJson1GetMapTileCommand,
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

export interface GetMapTileCommandInput extends GetMapTileRequest {}
export interface GetMapTileCommandOutput extends GetMapTileResponse, __MetadataBearer {}

/**
 * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to
 *             render a map. They are addressed using a grid arrangement with an X coordinate, Y
 *             coordinate, and Z (zoom) level. </p>
 *         <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
 *             both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0)
 *             will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
 */
export class GetMapTileCommand extends $Command<
  GetMapTileCommandInput,
  GetMapTileCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMapTileCommandInput) {
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
  ): Handler<GetMapTileCommandInput, GetMapTileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetMapTileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMapTileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMapTileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMapTileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMapTileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMapTileCommandOutput> {
    return deserializeAws_restJson1GetMapTileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
