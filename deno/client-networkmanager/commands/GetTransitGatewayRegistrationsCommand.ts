import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetTransitGatewayRegistrationsCommand,
  serializeAws_restJson1GetTransitGatewayRegistrationsCommand,
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

export interface GetTransitGatewayRegistrationsCommandInput extends GetTransitGatewayRegistrationsRequest {}
export interface GetTransitGatewayRegistrationsCommandOutput
  extends GetTransitGatewayRegistrationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the transit gateway registrations in a specified
 *             global network.</p>
 */
export class GetTransitGatewayRegistrationsCommand extends $Command<
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayRegistrationsCommandInput) {
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
  ): Handler<GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayRegistrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayRegistrationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayRegistrationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayRegistrationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTransitGatewayRegistrationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayRegistrationsCommandOutput> {
    return deserializeAws_restJson1GetTransitGatewayRegistrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
