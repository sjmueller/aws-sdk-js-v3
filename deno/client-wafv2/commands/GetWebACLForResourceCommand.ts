import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { GetWebACLForResourceRequest, GetWebACLForResourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetWebACLForResourceCommand,
  serializeAws_json1_1GetWebACLForResourceCommand,
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

export interface GetWebACLForResourceCommandInput extends GetWebACLForResourceRequest {}
export interface GetWebACLForResourceCommandOutput extends GetWebACLForResourceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetWebACLForResourceCommand } from "../../client-wafv2/mod.ts";
 * // const { WAFV2Client, GetWebACLForResourceCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetWebACLForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebACLForResourceCommandInput} for command's `input` shape.
 * @see {@link GetWebACLForResourceCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetWebACLForResourceCommand extends $Command<
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWebACLForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWebACLForResourceCommandInput, GetWebACLForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "GetWebACLForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWebACLForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWebACLForResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWebACLForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetWebACLForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWebACLForResourceCommandOutput> {
    return deserializeAws_json1_1GetWebACLForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
