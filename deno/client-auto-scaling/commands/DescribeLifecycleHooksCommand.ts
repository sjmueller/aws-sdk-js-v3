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
