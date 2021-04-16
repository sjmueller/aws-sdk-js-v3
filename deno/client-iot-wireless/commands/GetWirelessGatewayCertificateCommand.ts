import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { GetWirelessGatewayCertificateRequest, GetWirelessGatewayCertificateResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetWirelessGatewayCertificateCommand,
  serializeAws_restJson1GetWirelessGatewayCertificateCommand,
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

export type GetWirelessGatewayCertificateCommandInput = GetWirelessGatewayCertificateRequest;
export type GetWirelessGatewayCertificateCommandOutput = GetWirelessGatewayCertificateResponse & __MetadataBearer;

/**
 * <p>Gets the ID of the certificate that is currently associated with a wireless gateway.</p>
 */
export class GetWirelessGatewayCertificateCommand extends $Command<
  GetWirelessGatewayCertificateCommandInput,
  GetWirelessGatewayCertificateCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWirelessGatewayCertificateCommandInput) {
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
  ): Handler<GetWirelessGatewayCertificateCommandInput, GetWirelessGatewayCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessGatewayCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessGatewayCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWirelessGatewayCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWirelessGatewayCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessGatewayCertificateCommandOutput> {
    return deserializeAws_restJson1GetWirelessGatewayCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
