import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeCarrierGatewaysRequest, DescribeCarrierGatewaysResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeCarrierGatewaysCommand,
  serializeAws_ec2DescribeCarrierGatewaysCommand,
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

export type DescribeCarrierGatewaysCommandInput = DescribeCarrierGatewaysRequest;
export type DescribeCarrierGatewaysCommandOutput = DescribeCarrierGatewaysResult & __MetadataBearer;

/**
 * <p>Describes one or more of your carrier gateways.</p>
 */
export class DescribeCarrierGatewaysCommand extends $Command<
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCarrierGatewaysCommandInput) {
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
  ): Handler<DescribeCarrierGatewaysCommandInput, DescribeCarrierGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCarrierGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCarrierGatewaysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCarrierGatewaysResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCarrierGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeCarrierGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCarrierGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeCarrierGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
