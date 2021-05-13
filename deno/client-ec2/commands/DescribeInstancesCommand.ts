import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeInstancesRequest, DescribeInstancesResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeInstancesCommand,
  serializeAws_ec2DescribeInstancesCommand,
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

export interface DescribeInstancesCommandInput extends DescribeInstancesRequest {}
export interface DescribeInstancesCommandOutput extends DescribeInstancesResult, __MetadataBearer {}

/**
 * <p>Describes the specified instances or all instances.</p>
 *         <p>If you specify instance IDs, the output includes information for only the specified instances.
 *             If you specify filters, the output includes information for only those instances that meet the filter criteria.
 *             If you do not specify instance IDs or filters, the output includes information for all instances,
 *             which can affect performance. We recommend that you use pagination to ensure that the operation
 *             returns quickly and successfully.</p>
 *         <p>If you specify an instance ID that is not valid, an error is returned. If you
 *             specify an instance that you do not own, it is not included in the output.</p>
 *         <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *         <p>If you describe instances in the rare case where an Availability Zone is experiencing
 *             a service disruption and you specify instance IDs that are in the affected zone, or do
 *             not specify any instance IDs at all, the call fails. If you describe instances and
 *             specify only instance IDs that are in an unaffected zone, the call works
 *             normally.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstancesCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, DescribeInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstancesCommand extends $Command<
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstancesCommandInput) {
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
  ): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancesCommandOutput> {
    return deserializeAws_ec2DescribeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
