import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient.ts";
import { DefineSuggesterRequest, DefineSuggesterResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDefineSuggesterCommand,
  serializeAws_queryDefineSuggesterCommand,
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

export interface DefineSuggesterCommandInput extends DefineSuggesterRequest {}
export interface DefineSuggesterCommandOutput extends DefineSuggesterResponse, __MetadataBearer {}

/**
 * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DefineSuggesterCommand extends $Command<
  DefineSuggesterCommandInput,
  DefineSuggesterCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DefineSuggesterCommandInput) {
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
  ): Handler<DefineSuggesterCommandInput, DefineSuggesterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineSuggesterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DefineSuggesterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DefineSuggesterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineSuggesterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineSuggesterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineSuggesterCommandOutput> {
    return deserializeAws_queryDefineSuggesterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
