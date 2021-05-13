import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DescribeInstanceRefreshesAnswer, DescribeInstanceRefreshesType } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeInstanceRefreshesCommand,
  serializeAws_queryDescribeInstanceRefreshesCommand,
} from "../protocols/Aws_query.ts";
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

export interface DescribeInstanceRefreshesCommandInput extends DescribeInstanceRefreshesType {}
export interface DescribeInstanceRefreshesCommandOutput extends DescribeInstanceRefreshesAnswer, __MetadataBearer {}

/**
 * <p>Describes one or more instance refreshes.</p>
 *         <p>You can determine the status of a request by looking at the <code>Status</code>
 *             parameter. The following are the possible statuses: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>Pending</code> - The request was created, but the operation has not
 *                     started.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>InProgress</code> - The operation is in progress.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Successful</code> - The operation completed successfully.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Failed</code> - The operation failed to complete. You can troubleshoot
 *                     using the status reason and the scaling activities. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Cancelling</code> - An ongoing operation is being cancelled.
 *                     Cancellation does not roll back any replacements that have already been
 *                     completed, but it prevents new replacements from being started. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Cancelled</code> - The operation is cancelled. </p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">Replacing Auto Scaling instances
 *                 based on an instance refresh</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeInstanceRefreshesCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, DescribeInstanceRefreshesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeInstanceRefreshesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceRefreshesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceRefreshesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstanceRefreshesCommand extends $Command<
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceRefreshesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceRefreshesCommandInput, DescribeInstanceRefreshesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeInstanceRefreshesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceRefreshesType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceRefreshesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceRefreshesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeInstanceRefreshesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceRefreshesCommandOutput> {
    return deserializeAws_queryDescribeInstanceRefreshesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
