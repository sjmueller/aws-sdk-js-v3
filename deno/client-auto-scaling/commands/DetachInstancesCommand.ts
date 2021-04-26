import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DetachInstancesAnswer, DetachInstancesQuery } from "../models/models_0.ts";
import {
  deserializeAws_queryDetachInstancesCommand,
  serializeAws_queryDetachInstancesCommand,
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

export interface DetachInstancesCommandInput extends DetachInstancesQuery {}
export interface DetachInstancesCommandOutput extends DetachInstancesAnswer, __MetadataBearer {}

/**
 * <p>Removes one or more instances from the specified Auto Scaling group.</p>
 *         <p>After the instances are detached, you can manage them independent of the Auto Scaling
 *             group.</p>
 *         <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are detached.</p>
 *         <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are
 *             deregistered from the load balancer. If there are target groups attached to the Auto Scaling
 *             group, the instances are deregistered from the target groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from
 *                 your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class DetachInstancesCommand extends $Command<
  DetachInstancesCommandInput,
  DetachInstancesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachInstancesCommandInput) {
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
  ): Handler<DetachInstancesCommandInput, DetachInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachInstancesQuery.filterSensitiveLog,
      outputFilterSensitiveLog: DetachInstancesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachInstancesCommandOutput> {
    return deserializeAws_queryDetachInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
