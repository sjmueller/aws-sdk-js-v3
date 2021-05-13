import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { GetKeyRotationStatusRequest, GetKeyRotationStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetKeyRotationStatusCommand,
  serializeAws_json1_1GetKeyRotationStatusCommand,
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

export interface GetKeyRotationStatusCommandInput extends GetKeyRotationStatusRequest {}
export interface GetKeyRotationStatusCommandOutput extends GetKeyRotationStatusResponse, __MetadataBearer {}

/**
 * <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is
 *       enabled for the specified customer master key (CMK).</p>
 *          <p>You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. The key rotation status for these CMKs is always <code>false</code>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>Disabled: The key rotation status does not change when you disable a CMK. However,
 *           while the CMK is disabled, AWS KMS does not rotate the backing key.</p>
 *             </li>
 *             <li>
 *                <p>Pending deletion: While a CMK is pending deletion, its key rotation status is
 *             <code>false</code> and AWS KMS does not rotate the backing key. If you cancel the
 *           deletion, the original key rotation status is restored.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DisableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EnableKeyRotation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyRotationStatusCommand } from "../../client-kms/mod.ts";
 * // const { KMSClient, GetKeyRotationStatusCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetKeyRotationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyRotationStatusCommandInput} for command's `input` shape.
 * @see {@link GetKeyRotationStatusCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetKeyRotationStatusCommand extends $Command<
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyRotationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyRotationStatusCommandInput, GetKeyRotationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetKeyRotationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyRotationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyRotationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKeyRotationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetKeyRotationStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyRotationStatusCommandOutput> {
    return deserializeAws_json1_1GetKeyRotationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
