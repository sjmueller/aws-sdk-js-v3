import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient.ts";
import { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListResourcesForWebACLCommand,
  serializeAws_json1_1ListResourcesForWebACLCommand,
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

export interface ListResourcesForWebACLCommandInput extends ListResourcesForWebACLRequest {}
export interface ListResourcesForWebACLCommandOutput extends ListResourcesForWebACLResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic Regional</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of resources associated with the specified web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListResourcesForWebACLCommand } from "../../client-waf-regional/mod.ts";
 * // const { WAFRegionalClient, ListResourcesForWebACLCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListResourcesForWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesForWebACLCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListResourcesForWebACLCommand extends $Command<
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourcesForWebACLCommandInput) {
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
  ): Handler<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "ListResourcesForWebACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourcesForWebACLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourcesForWebACLResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourcesForWebACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourcesForWebACLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourcesForWebACLCommandOutput> {
    return deserializeAws_json1_1ListResourcesForWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
