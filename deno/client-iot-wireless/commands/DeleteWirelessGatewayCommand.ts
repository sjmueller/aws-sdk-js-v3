import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { DeleteWirelessGatewayRequest, DeleteWirelessGatewayResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteWirelessGatewayCommand,
  serializeAws_restJson1DeleteWirelessGatewayCommand,
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

export type DeleteWirelessGatewayCommandInput = DeleteWirelessGatewayRequest;
export type DeleteWirelessGatewayCommandOutput = DeleteWirelessGatewayResponse & __MetadataBearer;

/**
 * <p>Deletes a wireless gateway.</p>
 */
export class DeleteWirelessGatewayCommand extends $Command<
  DeleteWirelessGatewayCommandInput,
  DeleteWirelessGatewayCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWirelessGatewayCommandInput) {
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
  ): Handler<DeleteWirelessGatewayCommandInput, DeleteWirelessGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DeleteWirelessGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWirelessGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWirelessGatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWirelessGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWirelessGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWirelessGatewayCommandOutput> {
    return deserializeAws_restJson1DeleteWirelessGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
