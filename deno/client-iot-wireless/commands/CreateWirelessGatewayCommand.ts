import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { CreateWirelessGatewayRequest, CreateWirelessGatewayResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateWirelessGatewayCommand,
  serializeAws_restJson1CreateWirelessGatewayCommand,
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

export type CreateWirelessGatewayCommandInput = CreateWirelessGatewayRequest;
export type CreateWirelessGatewayCommandOutput = CreateWirelessGatewayResponse & __MetadataBearer;

/**
 * <p>Provisions a wireless gateway.</p>
 */
export class CreateWirelessGatewayCommand extends $Command<
  CreateWirelessGatewayCommandInput,
  CreateWirelessGatewayCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWirelessGatewayCommandInput) {
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
  ): Handler<CreateWirelessGatewayCommandInput, CreateWirelessGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "CreateWirelessGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWirelessGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWirelessGatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWirelessGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWirelessGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWirelessGatewayCommandOutput> {
    return deserializeAws_restJson1CreateWirelessGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
