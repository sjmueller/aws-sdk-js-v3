import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient.ts";
import { UpdatePrivateDnsNamespaceRequest, UpdatePrivateDnsNamespaceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdatePrivateDnsNamespaceCommand,
  serializeAws_json1_1UpdatePrivateDnsNamespaceCommand,
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

export interface UpdatePrivateDnsNamespaceCommandInput extends UpdatePrivateDnsNamespaceRequest {}
export interface UpdatePrivateDnsNamespaceCommandOutput extends UpdatePrivateDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates a private DNS
 *    namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdatePrivateDnsNamespaceCommand } from "../../client-servicediscovery/mod.ts";
 * // const { ServiceDiscoveryClient, UpdatePrivateDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePrivateDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdatePrivateDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePrivateDnsNamespaceCommand extends $Command<
  UpdatePrivateDnsNamespaceCommandInput,
  UpdatePrivateDnsNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePrivateDnsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePrivateDnsNamespaceCommandInput, UpdatePrivateDnsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdatePrivateDnsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePrivateDnsNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePrivateDnsNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePrivateDnsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePrivateDnsNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePrivateDnsNamespaceCommandOutput> {
    return deserializeAws_json1_1UpdatePrivateDnsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
