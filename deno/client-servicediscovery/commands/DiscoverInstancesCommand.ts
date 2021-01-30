import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient.ts";
import { DiscoverInstancesRequest, DiscoverInstancesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DiscoverInstancesCommand,
  serializeAws_json1_1DiscoverInstancesCommand,
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

export type DiscoverInstancesCommandInput = DiscoverInstancesRequest;
export type DiscoverInstancesCommandOutput = DiscoverInstancesResponse & __MetadataBearer;

/**
 * <p>Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code>
 *    to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries
 *    to discover instances.</p>
 */
export class DiscoverInstancesCommand extends $Command<
  DiscoverInstancesCommandInput,
  DiscoverInstancesCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DiscoverInstancesCommandInput) {
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
  ): Handler<DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "DiscoverInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DiscoverInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DiscoverInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DiscoverInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DiscoverInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverInstancesCommandOutput> {
    return deserializeAws_json1_1DiscoverInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
