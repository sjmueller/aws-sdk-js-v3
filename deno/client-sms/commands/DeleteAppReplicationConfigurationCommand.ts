import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient.ts";
import {
  DeleteAppReplicationConfigurationRequest,
  DeleteAppReplicationConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteAppReplicationConfigurationCommand,
  serializeAws_json1_1DeleteAppReplicationConfigurationCommand,
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

export interface DeleteAppReplicationConfigurationCommandInput extends DeleteAppReplicationConfigurationRequest {}
export interface DeleteAppReplicationConfigurationCommandOutput
  extends DeleteAppReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the replication configuration for the specified application.</p>
 */
export class DeleteAppReplicationConfigurationCommand extends $Command<
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAppReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppReplicationConfigurationCommandInput, DeleteAppReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "DeleteAppReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppReplicationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppReplicationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAppReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAppReplicationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAppReplicationConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteAppReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
