import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { ListEnabledProductsForImportRequest, ListEnabledProductsForImportResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListEnabledProductsForImportCommand,
  serializeAws_restJson1ListEnabledProductsForImportCommand,
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

export interface ListEnabledProductsForImportCommandInput extends ListEnabledProductsForImportRequest {}
export interface ListEnabledProductsForImportCommandOutput
  extends ListEnabledProductsForImportResponse,
    __MetadataBearer {}

/**
 * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
 *          findings from in Security Hub.</p>
 */
export class ListEnabledProductsForImportCommand extends $Command<
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEnabledProductsForImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListEnabledProductsForImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnabledProductsForImportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEnabledProductsForImportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnabledProductsForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnabledProductsForImportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnabledProductsForImportCommandOutput> {
    return deserializeAws_restJson1ListEnabledProductsForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
