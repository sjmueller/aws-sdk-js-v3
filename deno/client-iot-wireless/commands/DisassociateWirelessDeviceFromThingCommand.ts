import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import {
  DisassociateWirelessDeviceFromThingRequest,
  DisassociateWirelessDeviceFromThingResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand,
  serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand,
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

export interface DisassociateWirelessDeviceFromThingCommandInput extends DisassociateWirelessDeviceFromThingRequest {}
export interface DisassociateWirelessDeviceFromThingCommandOutput
  extends DisassociateWirelessDeviceFromThingResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless device from its currently associated thing.</p>
 */
export class DisassociateWirelessDeviceFromThingCommand extends $Command<
  DisassociateWirelessDeviceFromThingCommandInput,
  DisassociateWirelessDeviceFromThingCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateWirelessDeviceFromThingCommandInput) {
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
  ): Handler<DisassociateWirelessDeviceFromThingCommandInput, DisassociateWirelessDeviceFromThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessDeviceFromThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWirelessDeviceFromThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWirelessDeviceFromThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWirelessDeviceFromThingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput> {
    return deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
