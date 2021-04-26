import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DeregisterTransitGatewayMulticastGroupSourcesRequest,
  DeregisterTransitGatewayMulticastGroupSourcesResult,
} from "../models/models_2.ts";
import {
  deserializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand,
  serializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface DeregisterTransitGatewayMulticastGroupSourcesCommandInput
  extends DeregisterTransitGatewayMulticastGroupSourcesRequest {}
export interface DeregisterTransitGatewayMulticastGroupSourcesCommandOutput
  extends DeregisterTransitGatewayMulticastGroupSourcesResult,
    __MetadataBearer {}

/**
 * <p>Deregisters the specified sources (network interfaces) from the  transit gateway multicast group.</p>
 */
export class DeregisterTransitGatewayMulticastGroupSourcesCommand extends $Command<
  DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
  DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    DeregisterTransitGatewayMulticastGroupSourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterTransitGatewayMulticastGroupSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupSourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupSourcesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterTransitGatewayMulticastGroupSourcesCommandOutput> {
    return deserializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
