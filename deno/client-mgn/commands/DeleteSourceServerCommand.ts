import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient.ts";
import { DeleteSourceServerRequest, DeleteSourceServerResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteSourceServerCommand,
  serializeAws_restJson1DeleteSourceServerCommand,
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

export interface DeleteSourceServerCommandInput extends DeleteSourceServerRequest {}
export interface DeleteSourceServerCommandOutput extends DeleteSourceServerResponse, __MetadataBearer {}

/**
 * <p>Deletes a single source server by ID.</p>
 */
export class DeleteSourceServerCommand extends $Command<
  DeleteSourceServerCommandInput,
  DeleteSourceServerCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSourceServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DeleteSourceServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSourceServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSourceServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSourceServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSourceServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSourceServerCommandOutput> {
    return deserializeAws_restJson1DeleteSourceServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
