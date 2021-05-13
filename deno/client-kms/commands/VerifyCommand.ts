import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { VerifyRequest, VerifyResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1VerifyCommand, serializeAws_json1_1VerifyCommand } from "../protocols/Aws_json1_1.ts";
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

export interface VerifyCommandInput extends VerifyRequest {}
export interface VerifyCommandOutput extends VerifyResponse, __MetadataBearer {}

/**
 * <p>Verifies a digital signature that was generated by the <a>Sign</a> operation. </p>
 *          <p></p>
 *          <p>Verification confirms that an authorized user signed the message with the specified CMK
 *       and signing algorithm, and the message hasn't changed since it was signed. If the signature is
 *       verified, the value of the <code>SignatureValid</code> field in the response is
 *         <code>True</code>. If the signature verification fails, the <code>Verify</code> operation
 *       fails with an <code>KMSInvalidSignatureException</code> exception.</p>
 *          <p>A digital signature is generated by using the private key in an asymmetric CMK. The
 *       signature is verified by using the public key in the same asymmetric CMK.
 *       For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>To verify a digital signature, you can use the <code>Verify</code> operation. Specify the
 *       same asymmetric CMK, message, and signing algorithm that were used to produce the
 *       signature.</p>
 *          <p>You can also verify the digital signature by using the public key of the CMK outside of
 *       AWS KMS. Use the <a>GetPublicKey</a> operation to download the public key in the
 *       asymmetric CMK and then use the public key to verify the signature outside of AWS KMS. The
 *       advantage of using the <code>Verify</code> operation is that it is performed within AWS KMS. As
 *       a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged
 *       in AWS CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use
 *       the CMK to verify signatures.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Verify</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>Sign</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, VerifyCommand } from "../../client-kms/mod.ts";
 * // const { KMSClient, VerifyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new VerifyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyCommandInput} for command's `input` shape.
 * @see {@link VerifyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class VerifyCommand extends $Command<VerifyCommandInput, VerifyCommandOutput, KMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyCommandInput) {
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
  ): Handler<VerifyCommandInput, VerifyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "VerifyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1VerifyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyCommandOutput> {
    return deserializeAws_json1_1VerifyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
