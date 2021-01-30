import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeClassicLinkInstancesRequest, DescribeClassicLinkInstancesResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeClassicLinkInstancesCommand,
  serializeAws_ec2DescribeClassicLinkInstancesCommand,
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

export type DescribeClassicLinkInstancesCommandInput = DescribeClassicLinkInstancesRequest;
export type DescribeClassicLinkInstancesCommandOutput = DescribeClassicLinkInstancesResult & __MetadataBearer;

/**
 * <p>Describes one or more of your linked EC2-Classic instances. This request only returns
 * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
 * 			use this request to return information about other instances.</p>
 */
export class DescribeClassicLinkInstancesCommand extends $Command<
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClassicLinkInstancesCommandInput) {
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
  ): Handler<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClassicLinkInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClassicLinkInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClassicLinkInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClassicLinkInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClassicLinkInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClassicLinkInstancesCommandOutput> {
    return deserializeAws_ec2DescribeClassicLinkInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
