import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { AttachVpnGatewayRequest, AttachVpnGatewayResult } from "../models/models_0.ts";
import {
  deserializeAws_ec2AttachVpnGatewayCommand,
  serializeAws_ec2AttachVpnGatewayCommand,
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

export interface AttachVpnGatewayCommandInput extends AttachVpnGatewayRequest {}
export interface AttachVpnGatewayCommandOutput extends AttachVpnGatewayResult, __MetadataBearer {}

/**
 * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private
 *             gateway to one VPC at a time.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 */
export class AttachVpnGatewayCommand extends $Command<
  AttachVpnGatewayCommandInput,
  AttachVpnGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachVpnGatewayCommandInput) {
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
  ): Handler<AttachVpnGatewayCommandInput, AttachVpnGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachVpnGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachVpnGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachVpnGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachVpnGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AttachVpnGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachVpnGatewayCommandOutput> {
    return deserializeAws_ec2AttachVpnGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
