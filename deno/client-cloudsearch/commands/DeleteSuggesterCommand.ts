import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient.ts";
import { DeleteSuggesterRequest, DeleteSuggesterResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteSuggesterCommand,
  serializeAws_queryDeleteSuggesterCommand,
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

export interface DeleteSuggesterCommandInput extends DeleteSuggesterRequest {}
export interface DeleteSuggesterCommandOutput extends DeleteSuggesterResponse, __MetadataBearer {}

/**
 * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteSuggesterCommand } from "../../client-cloudsearch/mod.ts";
 * // const { CloudSearchClient, DeleteSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteSuggesterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuggesterCommandInput} for command's `input` shape.
 * @see {@link DeleteSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSuggesterCommand extends $Command<
  DeleteSuggesterCommandInput,
  DeleteSuggesterCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSuggesterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DeleteSuggesterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSuggesterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSuggesterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSuggesterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSuggesterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSuggesterCommandOutput> {
    return deserializeAws_queryDeleteSuggesterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
