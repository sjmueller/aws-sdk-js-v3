import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { UpdateWirelessDeviceRequest, UpdateWirelessDeviceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateWirelessDeviceCommand,
  serializeAws_restJson1UpdateWirelessDeviceCommand,
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

export interface UpdateWirelessDeviceCommandInput extends UpdateWirelessDeviceRequest {}
export interface UpdateWirelessDeviceCommandOutput extends UpdateWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a wireless device.</p>
 */
export class UpdateWirelessDeviceCommand extends $Command<
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWirelessDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWirelessDeviceCommandInput, UpdateWirelessDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateWirelessDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWirelessDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWirelessDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWirelessDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateWirelessDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWirelessDeviceCommandOutput> {
    return deserializeAws_restJson1UpdateWirelessDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
