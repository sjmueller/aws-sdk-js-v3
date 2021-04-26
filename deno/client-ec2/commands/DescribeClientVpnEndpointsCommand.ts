import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeClientVpnEndpointsRequest, DescribeClientVpnEndpointsResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeClientVpnEndpointsCommand,
  serializeAws_ec2DescribeClientVpnEndpointsCommand,
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

export interface DescribeClientVpnEndpointsCommandInput extends DescribeClientVpnEndpointsRequest {}
export interface DescribeClientVpnEndpointsCommandOutput extends DescribeClientVpnEndpointsResult, __MetadataBearer {}

/**
 * <p>Describes one or more Client VPN endpoints in the account.</p>
 */
export class DescribeClientVpnEndpointsCommand extends $Command<
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClientVpnEndpointsCommandInput) {
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
  ): Handler<DescribeClientVpnEndpointsCommandInput, DescribeClientVpnEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientVpnEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientVpnEndpointsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClientVpnEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClientVpnEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientVpnEndpointsCommandOutput> {
    return deserializeAws_ec2DescribeClientVpnEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
