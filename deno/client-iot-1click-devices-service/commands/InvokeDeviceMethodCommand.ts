import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient.ts";
import { InvokeDeviceMethodRequest, InvokeDeviceMethodResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1InvokeDeviceMethodCommand,
  serializeAws_restJson1InvokeDeviceMethodCommand,
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

export interface InvokeDeviceMethodCommandInput extends InvokeDeviceMethodRequest {}
export interface InvokeDeviceMethodCommandOutput extends InvokeDeviceMethodResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, issues a request to invoke a named device method (with possible
 *  parameters). See the "Example POST" code snippet below.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } from "../../client-iot-1click-devices-service/mod.ts";
 * // const { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new InvokeDeviceMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeDeviceMethodCommandInput} for command's `input` shape.
 * @see {@link InvokeDeviceMethodCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class InvokeDeviceMethodCommand extends $Command<
  InvokeDeviceMethodCommandInput,
  InvokeDeviceMethodCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InvokeDeviceMethodCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "InvokeDeviceMethodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeDeviceMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InvokeDeviceMethodResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeDeviceMethodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeDeviceMethodCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeDeviceMethodCommandOutput> {
    return deserializeAws_restJson1InvokeDeviceMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
