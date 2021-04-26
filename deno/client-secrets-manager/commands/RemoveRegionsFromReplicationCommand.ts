import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient.ts";
import { RemoveRegionsFromReplicationRequest, RemoveRegionsFromReplicationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RemoveRegionsFromReplicationCommand,
  serializeAws_json1_1RemoveRegionsFromReplicationCommand,
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

export interface RemoveRegionsFromReplicationCommandInput extends RemoveRegionsFromReplicationRequest {}
export interface RemoveRegionsFromReplicationCommandOutput
  extends RemoveRegionsFromReplicationResponse,
    __MetadataBearer {}

/**
 * <p>Remove regions from replication.</p>
 */
export class RemoveRegionsFromReplicationCommand extends $Command<
  RemoveRegionsFromReplicationCommandInput,
  RemoveRegionsFromReplicationCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveRegionsFromReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveRegionsFromReplicationCommandInput, RemoveRegionsFromReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "RemoveRegionsFromReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveRegionsFromReplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveRegionsFromReplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveRegionsFromReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveRegionsFromReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveRegionsFromReplicationCommandOutput> {
    return deserializeAws_json1_1RemoveRegionsFromReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
