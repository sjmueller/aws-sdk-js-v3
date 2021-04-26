import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeTransitGatewayConnectsRequest, DescribeTransitGatewayConnectsResult } from "../models/models_3.ts";
import {
  deserializeAws_ec2DescribeTransitGatewayConnectsCommand,
  serializeAws_ec2DescribeTransitGatewayConnectsCommand,
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

export interface DescribeTransitGatewayConnectsCommandInput extends DescribeTransitGatewayConnectsRequest {}
export interface DescribeTransitGatewayConnectsCommandOutput
  extends DescribeTransitGatewayConnectsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more Connect attachments.</p>
 */
export class DescribeTransitGatewayConnectsCommand extends $Command<
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayConnectsCommandInput) {
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
  ): Handler<DescribeTransitGatewayConnectsCommandInput, DescribeTransitGatewayConnectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayConnectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayConnectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayConnectsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayConnectsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayConnectsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayConnectsCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayConnectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
