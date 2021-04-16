import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { BatchUpdateDevicePositionRequest, BatchUpdateDevicePositionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchUpdateDevicePositionCommand,
  serializeAws_restJson1BatchUpdateDevicePositionCommand,
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

export type BatchUpdateDevicePositionCommandInput = BatchUpdateDevicePositionRequest;
export type BatchUpdateDevicePositionCommandOutput = BatchUpdateDevicePositionResponse & __MetadataBearer;

/**
 * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
 *             uses the data when reporting the last known device position and position history.</p>
 *          <note>
 *            <p>Only one position update is stored per sample time. Location data is sampled at a
 *                 fixed rate of one position per 30-second interval, and retained for one year before
 *                 it is deleted.</p>
 *          </note>
 */
export class BatchUpdateDevicePositionCommand extends $Command<
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateDevicePositionCommandInput) {
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
  ): Handler<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchUpdateDevicePositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateDevicePositionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateDevicePositionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateDevicePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateDevicePositionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateDevicePositionCommandOutput> {
    return deserializeAws_restJson1BatchUpdateDevicePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
