import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { RemoveManagedScalingPolicyInput, RemoveManagedScalingPolicyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RemoveManagedScalingPolicyCommand,
  serializeAws_json1_1RemoveManagedScalingPolicyCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface RemoveManagedScalingPolicyCommandInput extends RemoveManagedScalingPolicyInput {}
export interface RemoveManagedScalingPolicyCommandOutput extends RemoveManagedScalingPolicyOutput, __MetadataBearer {}

/**
 * <p> Removes a managed scaling policy from a specified EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveManagedScalingPolicyCommand } from "../../client-emr/mod.ts";
 * // const { EMRClient, RemoveManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RemoveManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveManagedScalingPolicyCommand extends $Command<
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveManagedScalingPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveManagedScalingPolicyCommandInput, RemoveManagedScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "RemoveManagedScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveManagedScalingPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveManagedScalingPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveManagedScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveManagedScalingPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveManagedScalingPolicyCommandOutput> {
    return deserializeAws_json1_1RemoveManagedScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
