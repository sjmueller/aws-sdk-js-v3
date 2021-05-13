import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient.ts";
import { DeleteSizeConstraintSetRequest, DeleteSizeConstraintSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteSizeConstraintSetCommand,
  serializeAws_json1_1DeleteSizeConstraintSetCommand,
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

export interface DeleteSizeConstraintSetCommandInput extends DeleteSizeConstraintSetRequest {}
export interface DeleteSizeConstraintSetCommandOutput extends DeleteSizeConstraintSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code>
 * 			or if it still includes any <a>SizeConstraint</a> objects (any filters).</p>
 * 		       <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteSizeConstraintSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteSizeConstraintSetCommand } from "../../client-waf-regional/mod.ts";
 * // const { WAFRegionalClient, DeleteSizeConstraintSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new DeleteSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link DeleteSizeConstraintSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSizeConstraintSetCommand extends $Command<
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSizeConstraintSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSizeConstraintSetCommandInput, DeleteSizeConstraintSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "DeleteSizeConstraintSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSizeConstraintSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSizeConstraintSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSizeConstraintSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSizeConstraintSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSizeConstraintSetCommandOutput> {
    return deserializeAws_json1_1DeleteSizeConstraintSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
