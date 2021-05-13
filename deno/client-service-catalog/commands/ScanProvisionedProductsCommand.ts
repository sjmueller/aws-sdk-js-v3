import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ScanProvisionedProductsInput, ScanProvisionedProductsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ScanProvisionedProductsCommand,
  serializeAws_json1_1ScanProvisionedProductsCommand,
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

export interface ScanProvisionedProductsCommandInput extends ScanProvisionedProductsInput {}
export interface ScanProvisionedProductsCommandOutput extends ScanProvisionedProductsOutput, __MetadataBearer {}

/**
 * <p>Lists the provisioned products that are available (not terminated).</p>
 *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ScanProvisionedProductsCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ScanProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ScanProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScanProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link ScanProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ScanProvisionedProductsCommand extends $Command<
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ScanProvisionedProductsCommandInput) {
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
  ): Handler<ScanProvisionedProductsCommandInput, ScanProvisionedProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ScanProvisionedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScanProvisionedProductsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ScanProvisionedProductsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ScanProvisionedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScanProvisionedProductsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScanProvisionedProductsCommandOutput> {
    return deserializeAws_json1_1ScanProvisionedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
