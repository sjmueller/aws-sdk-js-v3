import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListPrincipalsForPortfolioInput, ListPrincipalsForPortfolioOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPrincipalsForPortfolioCommand,
  serializeAws_json1_1ListPrincipalsForPortfolioCommand,
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

export interface ListPrincipalsForPortfolioCommandInput extends ListPrincipalsForPortfolioInput {}
export interface ListPrincipalsForPortfolioCommandOutput extends ListPrincipalsForPortfolioOutput, __MetadataBearer {}

/**
 * <p>Lists all principal ARNs associated with the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPrincipalsForPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsForPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPrincipalsForPortfolioCommand extends $Command<
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPrincipalsForPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPrincipalsForPortfolioCommandInput, ListPrincipalsForPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListPrincipalsForPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPrincipalsForPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPrincipalsForPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPrincipalsForPortfolioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPrincipalsForPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPrincipalsForPortfolioCommandOutput> {
    return deserializeAws_json1_1ListPrincipalsForPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
