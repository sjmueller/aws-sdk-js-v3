import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient.ts";
import { CloseTunnelRequest, CloseTunnelResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CloseTunnelCommand,
  serializeAws_json1_1CloseTunnelCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface CloseTunnelCommandInput extends CloseTunnelRequest {}
export interface CloseTunnelCommandOutput extends CloseTunnelResponse, __MetadataBearer {}

/**
 * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
 * 			request is received, we close the WebSocket connections between the client and proxy
 * 			server so no data can be transmitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, CloseTunnelCommand } from "../../client-iotsecuretunneling/mod.ts";
 * // const { IoTSecureTunnelingClient, CloseTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new CloseTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloseTunnelCommandInput} for command's `input` shape.
 * @see {@link CloseTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CloseTunnelCommand extends $Command<
  CloseTunnelCommandInput,
  CloseTunnelCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CloseTunnelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloseTunnelCommandInput, CloseTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "CloseTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CloseTunnelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CloseTunnelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CloseTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CloseTunnelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloseTunnelCommandOutput> {
    return deserializeAws_json1_1CloseTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
