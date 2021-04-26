import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient.ts";
import { ListNetworksInput, ListNetworksOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListNetworksCommand,
  serializeAws_restJson1ListNetworksCommand,
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

export interface ListNetworksCommandInput extends ListNetworksInput {}
export interface ListNetworksCommandOutput extends ListNetworksOutput, __MetadataBearer {}

/**
 * <p>Returns information about the networks in which the current AWS account participates.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 */
export class ListNetworksCommand extends $Command<
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNetworksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNetworksCommandInput, ListNetworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "ListNetworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNetworksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNetworksOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNetworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNetworksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNetworksCommandOutput> {
    return deserializeAws_restJson1ListNetworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
