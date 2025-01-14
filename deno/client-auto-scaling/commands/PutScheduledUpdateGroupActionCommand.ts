import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { PutScheduledUpdateGroupActionType } from "../models/models_0.ts";
import {
  deserializeAws_queryPutScheduledUpdateGroupActionCommand,
  serializeAws_queryPutScheduledUpdateGroupActionCommand,
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

export interface PutScheduledUpdateGroupActionCommandInput extends PutScheduledUpdateGroupActionType {}
export interface PutScheduledUpdateGroupActionCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a
 *             scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutScheduledUpdateGroupActionCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, PutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link PutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutScheduledUpdateGroupActionCommand extends $Command<
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScheduledUpdateGroupActionCommandInput) {
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
  ): Handler<PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutScheduledUpdateGroupActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutScheduledUpdateGroupActionType.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutScheduledUpdateGroupActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutScheduledUpdateGroupActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutScheduledUpdateGroupActionCommandOutput> {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
