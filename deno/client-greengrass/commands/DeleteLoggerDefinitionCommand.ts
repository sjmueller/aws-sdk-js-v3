import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteLoggerDefinitionCommand,
  serializeAws_restJson1DeleteLoggerDefinitionCommand,
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

export interface DeleteLoggerDefinitionCommandInput extends DeleteLoggerDefinitionRequest {}
export interface DeleteLoggerDefinitionCommandOutput extends DeleteLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a logger definition.
 */
export class DeleteLoggerDefinitionCommand extends $Command<
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoggerDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DeleteLoggerDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoggerDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoggerDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoggerDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLoggerDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoggerDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteLoggerDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
