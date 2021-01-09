import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DeleteUserByPrincipalIdRequest, DeleteUserByPrincipalIdResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteUserByPrincipalIdCommand,
  serializeAws_restJson1DeleteUserByPrincipalIdCommand,
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

export type DeleteUserByPrincipalIdCommandInput = DeleteUserByPrincipalIdRequest;
export type DeleteUserByPrincipalIdCommandOutput = DeleteUserByPrincipalIdResponse & __MetadataBearer;

/**
 * <p>Deletes a user identified by its principal ID. </p>
 */
export class DeleteUserByPrincipalIdCommand extends $Command<
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
  QuickSightClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserByPrincipalIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserByPrincipalIdCommandInput, DeleteUserByPrincipalIdCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteUserByPrincipalIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserByPrincipalIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteUserByPrincipalIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserByPrincipalIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUserByPrincipalIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserByPrincipalIdCommandOutput> {
    return deserializeAws_restJson1DeleteUserByPrincipalIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
