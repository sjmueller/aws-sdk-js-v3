import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { UpdateFileSystemAssociationInput, UpdateFileSystemAssociationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateFileSystemAssociationCommand,
  serializeAws_json1_1UpdateFileSystemAssociationCommand,
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

export type UpdateFileSystemAssociationCommandInput = UpdateFileSystemAssociationInput;
export type UpdateFileSystemAssociationCommandOutput = UpdateFileSystemAssociationOutput & __MetadataBearer;

/**
 * <p>Updates a file system association. This operation is only supported in the Amazon FSx
 *          file gateway type.</p>
 */
export class UpdateFileSystemAssociationCommand extends $Command<
  UpdateFileSystemAssociationCommandInput,
  UpdateFileSystemAssociationCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFileSystemAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFileSystemAssociationCommandInput, UpdateFileSystemAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateFileSystemAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFileSystemAssociationInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFileSystemAssociationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFileSystemAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFileSystemAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFileSystemAssociationCommandOutput> {
    return deserializeAws_json1_1UpdateFileSystemAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
