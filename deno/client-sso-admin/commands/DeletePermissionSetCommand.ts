import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import { DeletePermissionSetRequest, DeletePermissionSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeletePermissionSetCommand,
  serializeAws_json1_1DeletePermissionSetCommand,
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

export interface DeletePermissionSetCommandInput extends DeletePermissionSetRequest {}
export interface DeletePermissionSetCommandOutput extends DeletePermissionSetResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified permission set.</p>
 */
export class DeletePermissionSetCommand extends $Command<
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePermissionSetCommandInput, DeletePermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeletePermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePermissionSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePermissionSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePermissionSetCommandOutput> {
    return deserializeAws_json1_1DeletePermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
