import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client.ts";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1ListTagsCommand, serializeAws_json1_1ListTagsCommand } from "../protocols/Aws_json1_1.ts";
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

export interface ListTagsCommandInput extends ListTagsRequest {}
export interface ListTagsCommandOutput extends ListTagsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the tags. When the response contains only a subset of tags, it includes a
 *       <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to
 *       get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null
 *       value), that means there are no more tags to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ListTagsCommand } from "../../client-cloudhsm-v2/mod.ts";
 * // const { CloudHSMV2Client, ListTagsCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTagsCommand extends $Command<
  ListTagsCommandInput,
  ListTagsCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsCommandInput, ListTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "ListTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsCommandOutput> {
    return deserializeAws_json1_1ListTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
