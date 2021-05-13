import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { GetProvisionedProductOutputsInput, GetProvisionedProductOutputsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetProvisionedProductOutputsCommand,
  serializeAws_json1_1GetProvisionedProductOutputsCommand,
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

export interface GetProvisionedProductOutputsCommandInput extends GetProvisionedProductOutputsInput {}
export interface GetProvisionedProductOutputsCommandOutput
  extends GetProvisionedProductOutputsOutput,
    __MetadataBearer {}

/**
 * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetProvisionedProductOutputsCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, GetProvisionedProductOutputsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetProvisionedProductOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProvisionedProductOutputsCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedProductOutputsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetProvisionedProductOutputsCommand extends $Command<
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProvisionedProductOutputsCommandInput) {
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
  ): Handler<GetProvisionedProductOutputsCommandInput, GetProvisionedProductOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "GetProvisionedProductOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProvisionedProductOutputsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetProvisionedProductOutputsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProvisionedProductOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetProvisionedProductOutputsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProvisionedProductOutputsCommandOutput> {
    return deserializeAws_json1_1GetProvisionedProductOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
