import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import { ConfirmTransitVirtualInterfaceRequest, ConfirmTransitVirtualInterfaceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand,
  serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand,
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

export interface ConfirmTransitVirtualInterfaceCommandInput extends ConfirmTransitVirtualInterfaceRequest {}
export interface ConfirmTransitVirtualInterfaceCommandOutput
  extends ConfirmTransitVirtualInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Accepts ownership of a transit virtual interface created by another account.</p>
 *
 *          <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } from "../../client-direct-connect/mod.ts";
 * // const { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ConfirmTransitVirtualInterfaceCommand extends $Command<
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmTransitVirtualInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmTransitVirtualInterfaceCommandInput, ConfirmTransitVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmTransitVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmTransitVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmTransitVirtualInterfaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConfirmTransitVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmTransitVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
