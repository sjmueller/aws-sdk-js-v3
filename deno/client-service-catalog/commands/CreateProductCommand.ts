import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { CreateProductInput, CreateProductOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateProductCommand,
  serializeAws_json1_1CreateProductCommand,
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

export interface CreateProductCommandInput extends CreateProductInput {}
export interface CreateProductCommandOutput extends CreateProductOutput, __MetadataBearer {}

/**
 * <p>Creates a product.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 *
 *          <p>The user or role that performs this operation must have the
 *             <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is
 *          required when using the <code>ImportFromPhysicalId</code> template source in the
 *          information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProductCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, CreateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProductCommandInput} for command's `input` shape.
 * @see {@link CreateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateProductCommand extends $Command<
  CreateProductCommandInput,
  CreateProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProductCommandInput) {
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
  ): Handler<CreateProductCommandInput, CreateProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProductCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProductCommandOutput> {
    return deserializeAws_json1_1CreateProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
