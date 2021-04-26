import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { DeleteUserPolicyRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteUserPolicyCommand,
  serializeAws_queryDeleteUserPolicyCommand,
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

export interface DeleteUserPolicyCommandInput extends DeleteUserPolicyRequest {}
export interface DeleteUserPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             user.</p>
 *         <p>A user can also have managed policies attached to it. To detach a managed policy from
 *             a user, use <a>DetachUserPolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 */
export class DeleteUserPolicyCommand extends $Command<
  DeleteUserPolicyCommandInput,
  DeleteUserPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteUserPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteUserPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserPolicyCommandOutput> {
    return deserializeAws_queryDeleteUserPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
