import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import {
  DetachManagedPolicyFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand,
  serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand,
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

export interface DetachManagedPolicyFromPermissionSetCommandInput extends DetachManagedPolicyFromPermissionSetRequest {}
export interface DetachManagedPolicyFromPermissionSetCommandOutput
  extends DetachManagedPolicyFromPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Detaches the attached IAM managed policy ARN from the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } from "../../client-sso-admin/mod.ts";
 * // const { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DetachManagedPolicyFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachManagedPolicyFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachManagedPolicyFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetachManagedPolicyFromPermissionSetCommand extends $Command<
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachManagedPolicyFromPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachManagedPolicyFromPermissionSetCommandInput, DetachManagedPolicyFromPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DetachManagedPolicyFromPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachManagedPolicyFromPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachManagedPolicyFromPermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DetachManagedPolicyFromPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> {
    return deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
