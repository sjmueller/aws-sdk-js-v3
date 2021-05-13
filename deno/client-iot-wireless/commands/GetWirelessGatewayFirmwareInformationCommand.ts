import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import {
  GetWirelessGatewayFirmwareInformationRequest,
  GetWirelessGatewayFirmwareInformationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand,
  serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand,
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

export interface GetWirelessGatewayFirmwareInformationCommandInput
  extends GetWirelessGatewayFirmwareInformationRequest {}
export interface GetWirelessGatewayFirmwareInformationCommandOutput
  extends GetWirelessGatewayFirmwareInformationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the firmware version and other information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } from "../../client-iot-wireless/mod.ts";
 * // const { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayFirmwareInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayFirmwareInformationCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayFirmwareInformationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetWirelessGatewayFirmwareInformationCommand extends $Command<
  GetWirelessGatewayFirmwareInformationCommandInput,
  GetWirelessGatewayFirmwareInformationCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWirelessGatewayFirmwareInformationCommandInput) {
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
  ): Handler<GetWirelessGatewayFirmwareInformationCommandInput, GetWirelessGatewayFirmwareInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayFirmwareInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessGatewayFirmwareInformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessGatewayFirmwareInformationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetWirelessGatewayFirmwareInformationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> {
    return deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
