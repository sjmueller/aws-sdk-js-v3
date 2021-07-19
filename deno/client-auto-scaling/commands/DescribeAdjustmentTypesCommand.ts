import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DescribeAdjustmentTypesAnswer } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeAdjustmentTypesCommand,
  serializeAws_queryDescribeAdjustmentTypesCommand,
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

export interface DescribeAdjustmentTypesCommandInput {}
export interface DescribeAdjustmentTypesCommandOutput extends DescribeAdjustmentTypesAnswer, __MetadataBearer {}

/**
 * <p>Describes the available adjustment types for step scaling and simple scaling
 *             policies.</p>
 *         <p>The following adjustment types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>ChangeInCapacity</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>ExactCapacity</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>PercentChangeInCapacity</code>
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAdjustmentTypesCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, DescribeAdjustmentTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAdjustmentTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAdjustmentTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAdjustmentTypesCommand extends $Command<
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAdjustmentTypesCommandInput) {
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
  ): Handler<DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAdjustmentTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeAdjustmentTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAdjustmentTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAdjustmentTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAdjustmentTypesCommandOutput> {
    return deserializeAws_queryDescribeAdjustmentTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
