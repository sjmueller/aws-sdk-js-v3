import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DescribePortfolioSharesInput, DescribePortfolioSharesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribePortfolioSharesCommand,
  serializeAws_json1_1DescribePortfolioSharesCommand,
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

export interface DescribePortfolioSharesCommandInput extends DescribePortfolioSharesInput {}
export interface DescribePortfolioSharesCommandOutput extends DescribePortfolioSharesOutput, __MetadataBearer {}

/**
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioSharesCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, DescribePortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePortfolioSharesCommand extends $Command<
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePortfolioSharesCommandInput) {
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
  ): Handler<DescribePortfolioSharesCommandInput, DescribePortfolioSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePortfolioSharesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePortfolioSharesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePortfolioSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePortfolioSharesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePortfolioSharesCommandOutput> {
    return deserializeAws_json1_1DescribePortfolioSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
