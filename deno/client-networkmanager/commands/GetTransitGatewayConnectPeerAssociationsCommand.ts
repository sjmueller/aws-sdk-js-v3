import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import {
  GetTransitGatewayConnectPeerAssociationsRequest,
  GetTransitGatewayConnectPeerAssociationsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand,
  serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand,
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

export type GetTransitGatewayConnectPeerAssociationsCommandInput = GetTransitGatewayConnectPeerAssociationsRequest;
export type GetTransitGatewayConnectPeerAssociationsCommandOutput = GetTransitGatewayConnectPeerAssociationsResponse &
  __MetadataBearer;

/**
 * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
 */
export class GetTransitGatewayConnectPeerAssociationsCommand extends $Command<
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayConnectPeerAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetTransitGatewayConnectPeerAssociationsCommandInput,
    GetTransitGatewayConnectPeerAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayConnectPeerAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayConnectPeerAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayConnectPeerAssociationsResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayConnectPeerAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> {
    return deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
