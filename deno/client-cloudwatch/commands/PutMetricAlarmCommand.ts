import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { PutMetricAlarmInput } from "../models/models_0.ts";
import {
  deserializeAws_queryPutMetricAlarmCommand,
  serializeAws_queryPutMetricAlarmCommand,
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

export type PutMetricAlarmCommandInput = PutMetricAlarmInput;
export type PutMetricAlarmCommandOutput = __MetadataBearer;

/**
 * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression,
 * 			or anomaly detection model.</p>
 * 		       <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p>
 * 		       <p>When this operation creates an alarm, the alarm state is immediately set to
 * 			<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 * 			appropriately. Any actions associated with the new state are then executed.</p>
 * 		       <p>When you update an existing alarm, its state is left unchanged, but the
 * 			update completely overwrites the previous configuration of the alarm.</p>
 *
 * 		       <p>If you are an IAM user, you must have
 * 			Amazon EC2 permissions for some alarm operations:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The <code>iam:CreateServiceLinkedRole</code> for all alarms with EC2 actions</p>
 *
 * 			         </li>
 *             <li>
 *
 * 				           <p>The <code>iam:CreateServiceLinkedRole</code> to create an alarm
 * 					with Systems Manager OpsItem actions.</p>
 * 			         </li>
 *          </ul>
 *
 *
 *
 *
 *
 *
 * 		       <p>The first time you create an alarm in the
 * 			AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch
 * 			creates the necessary service-linked rolea for you. The service-linked roles
 * 			are called <code>AWSServiceRoleForCloudWatchEvents</code> and
 * 			<code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>.
 * 			For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">AWS service-linked role</a>.</p>
 */
export class PutMetricAlarmCommand extends $Command<
  PutMetricAlarmCommandInput,
  PutMetricAlarmCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMetricAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutMetricAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricAlarmInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetricAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutMetricAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetricAlarmCommandOutput> {
    return deserializeAws_queryPutMetricAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
