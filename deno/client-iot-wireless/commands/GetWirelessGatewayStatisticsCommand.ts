import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { GetWirelessGatewayStatisticsRequest, GetWirelessGatewayStatisticsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetWirelessGatewayStatisticsCommand,
  serializeAws_restJson1GetWirelessGatewayStatisticsCommand,
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

export type GetWirelessGatewayStatisticsCommandInput = GetWirelessGatewayStatisticsRequest;
export type GetWirelessGatewayStatisticsCommandOutput = GetWirelessGatewayStatisticsResponse & __MetadataBearer;

/**
 * <p>Gets operating information about a wireless gateway.</p>
 */
export class GetWirelessGatewayStatisticsCommand extends $Command<
  GetWirelessGatewayStatisticsCommandInput,
  GetWirelessGatewayStatisticsCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWirelessGatewayStatisticsCommandInput) {
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
  ): Handler<GetWirelessGatewayStatisticsCommandInput, GetWirelessGatewayStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessGatewayStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessGatewayStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWirelessGatewayStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWirelessGatewayStatisticsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessGatewayStatisticsCommandOutput> {
    return deserializeAws_restJson1GetWirelessGatewayStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
