import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DetectStackResourceDriftInput, DetectStackResourceDriftOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDetectStackResourceDriftCommand,
  serializeAws_queryDetectStackResourceDriftCommand,
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

export interface DetectStackResourceDriftCommandInput extends DetectStackResourceDriftInput {}
export interface DetectStackResourceDriftCommandOutput extends DetectStackResourceDriftOutput, __MetadataBearer {}

/**
 * <p>Returns information about whether a resource's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. This information includes actual
 *          and expected property values for resources in which CloudFormation detects drift. Only resource
 *          properties explicitly defined in the stack template are checked for drift. For more
 *          information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or
 *             <a>DetectStackDrift</a> to detect drift on all resources in a given stack
 *          that support drift detection.</p>
 *          <p>Resources that do not currently support drift detection cannot be checked. For a list
 *          of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackResourceDriftCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, DetectStackResourceDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackResourceDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackResourceDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackResourceDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetectStackResourceDriftCommand extends $Command<
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectStackResourceDriftCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectStackResourceDriftCommandInput, DetectStackResourceDriftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DetectStackResourceDriftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectStackResourceDriftInput.filterSensitiveLog,
      outputFilterSensitiveLog: DetectStackResourceDriftOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectStackResourceDriftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetectStackResourceDriftCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectStackResourceDriftCommandOutput> {
    return deserializeAws_queryDetectStackResourceDriftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
