import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient.ts";
import { SyncResourceRequest, SyncResourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SyncResourceCommand,
  serializeAws_restJson1SyncResourceCommand,
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

export interface SyncResourceCommandInput extends SyncResourceRequest {}
export interface SyncResourceCommandOutput extends SyncResourceResponse, __MetadataBearer {}

/**
 * <p>Syncs the resource with what is currently recorded in App registry. Specifically, the resource’s App registry system tags are synced with its associated application. The resource is removed if it is not associated with the application. The caller must have permissions to read and update the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, SyncResourceCommand } from "../../client-service-catalog-appregistry/mod.ts";
 * // const { ServiceCatalogAppRegistryClient, SyncResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new SyncResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SyncResourceCommandInput} for command's `input` shape.
 * @see {@link SyncResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SyncResourceCommand extends $Command<
  SyncResourceCommandInput,
  SyncResourceCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SyncResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SyncResourceCommandInput, SyncResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "SyncResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SyncResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SyncResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SyncResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SyncResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SyncResourceCommandOutput> {
    return deserializeAws_restJson1SyncResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
