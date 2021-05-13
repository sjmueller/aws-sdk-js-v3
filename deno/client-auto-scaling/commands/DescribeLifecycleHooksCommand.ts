import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DescribeLifecycleHooksAnswer, DescribeLifecycleHooksType } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeLifecycleHooksCommand,
  serializeAws_queryDescribeLifecycleHooksCommand,
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

export interface DescribeLifecycleHooksCommandInput extends DescribeLifecycleHooksType {}
export interface DescribeLifecycleHooksCommandOutput extends DescribeLifecycleHooksAnswer, __MetadataBearer {}

/**
 * <p>Describes the lifecycle hooks for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHooksCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, DescribeLifecycleHooksCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHooksCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLifecycleHooksCommand extends $Command<
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLifecycleHooksCommandInput) {
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
  ): Handler<DescribeLifecycleHooksCommandInput, DescribeLifecycleHooksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLifecycleHooksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLifecycleHooksType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLifecycleHooksAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLifecycleHooksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLifecycleHooksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLifecycleHooksCommandOutput> {
    return deserializeAws_queryDescribeLifecycleHooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
