import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { PutManagedScalingPolicyInput, PutManagedScalingPolicyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutManagedScalingPolicyCommand,
  serializeAws_json1_1PutManagedScalingPolicyCommand,
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

export type PutManagedScalingPolicyCommandInput = PutManagedScalingPolicyInput;
export type PutManagedScalingPolicyCommandOutput = PutManagedScalingPolicyOutput & __MetadataBearer;

/**
 * <p>Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed
 *          scaling policy defines the limits for resources, such as EC2 instances that can be added or
 *          terminated from a cluster. The policy only applies to the core and task nodes. The master
 *          node cannot be scaled after initial configuration. </p>
 */
export class PutManagedScalingPolicyCommand extends $Command<
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
  EMRClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutManagedScalingPolicyCommandInput) {
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
  ): Handler<PutManagedScalingPolicyCommandInput, PutManagedScalingPolicyCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutManagedScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutManagedScalingPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutManagedScalingPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutManagedScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutManagedScalingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutManagedScalingPolicyCommandOutput> {
    return deserializeAws_json1_1PutManagedScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
