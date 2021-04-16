import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { ListWirelessGatewaysRequest, ListWirelessGatewaysResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListWirelessGatewaysCommand,
  serializeAws_restJson1ListWirelessGatewaysCommand,
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

export type ListWirelessGatewaysCommandInput = ListWirelessGatewaysRequest;
export type ListWirelessGatewaysCommandOutput = ListWirelessGatewaysResponse & __MetadataBearer;

/**
 * <p>Lists the wireless gateways registered to your AWS account.</p>
 */
export class ListWirelessGatewaysCommand extends $Command<
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWirelessGatewaysCommandInput) {
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
  ): Handler<ListWirelessGatewaysCommandInput, ListWirelessGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListWirelessGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWirelessGatewaysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWirelessGatewaysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWirelessGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWirelessGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWirelessGatewaysCommandOutput> {
    return deserializeAws_restJson1ListWirelessGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
