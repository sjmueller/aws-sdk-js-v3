import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { UpdateCachePolicyRequest, UpdateCachePolicyResult } from "../models/models_1.ts";
import {
  deserializeAws_restXmlUpdateCachePolicyCommand,
  serializeAws_restXmlUpdateCachePolicyCommand,
} from "../protocols/Aws_restXml.ts";
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

export interface UpdateCachePolicyCommandInput extends UpdateCachePolicyRequest {}
export interface UpdateCachePolicyCommandOutput extends UpdateCachePolicyResult, __MetadataBearer {}

/**
 * <p>Updates a cache policy configuration.</p>
 * 		       <p>When you update a cache policy configuration, all the fields are updated with the
 * 			values provided in the request. You cannot update some fields independent of others. To
 * 			update a cache policy configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the cache policy configuration that you want to
 * 					update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
 * 					configuration, including the fields that you modified and those that you
 * 					didn’t.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCachePolicyCommand } from "../../client-cloudfront/mod.ts";
 * // const { CloudFrontClient, UpdateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCachePolicyCommand extends $Command<
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCachePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateCachePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCachePolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateCachePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCachePolicyCommandOutput> {
    return deserializeAws_restXmlUpdateCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
