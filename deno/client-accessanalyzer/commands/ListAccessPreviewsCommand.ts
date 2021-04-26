import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { ListAccessPreviewsRequest, ListAccessPreviewsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAccessPreviewsCommand,
  serializeAws_restJson1ListAccessPreviewsCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface ListAccessPreviewsCommandInput extends ListAccessPreviewsRequest {}
export interface ListAccessPreviewsCommandOutput extends ListAccessPreviewsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of access previews for the specified analyzer.</p>
 */
export class ListAccessPreviewsCommand extends $Command<
  ListAccessPreviewsCommandInput,
  ListAccessPreviewsCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccessPreviewsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListAccessPreviewsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessPreviewsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessPreviewsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessPreviewsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccessPreviewsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessPreviewsCommandOutput> {
    return deserializeAws_restJson1ListAccessPreviewsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
