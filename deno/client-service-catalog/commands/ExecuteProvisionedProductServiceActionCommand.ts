import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import {
  ExecuteProvisionedProductServiceActionInput,
  ExecuteProvisionedProductServiceActionOutput,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand,
  serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand,
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

export interface ExecuteProvisionedProductServiceActionCommandInput
  extends ExecuteProvisionedProductServiceActionInput {}
export interface ExecuteProvisionedProductServiceActionCommandOutput
  extends ExecuteProvisionedProductServiceActionOutput,
    __MetadataBearer {}

/**
 * <p>Executes a self-service action against a provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ExecuteProvisionedProductServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteProvisionedProductServiceActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExecuteProvisionedProductServiceActionCommand extends $Command<
  ExecuteProvisionedProductServiceActionCommandInput,
  ExecuteProvisionedProductServiceActionCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteProvisionedProductServiceActionCommandInput) {
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
  ): Handler<ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ExecuteProvisionedProductServiceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteProvisionedProductServiceActionInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteProvisionedProductServiceActionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExecuteProvisionedProductServiceActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteProvisionedProductServiceActionCommandOutput> {
    return deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
