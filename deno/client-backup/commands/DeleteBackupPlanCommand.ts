import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { DeleteBackupPlanInput, DeleteBackupPlanOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteBackupPlanCommand,
  serializeAws_restJson1DeleteBackupPlanCommand,
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

export interface DeleteBackupPlanCommandInput extends DeleteBackupPlanInput {}
export interface DeleteBackupPlanCommandOutput extends DeleteBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Deletes a backup plan. A backup plan can only be deleted after all associated selections
 *          of resources have been deleted. Deleting a backup plan deletes the current version of a
 *          backup plan. Previous versions, if any, will still exist.</p>
 */
export class DeleteBackupPlanCommand extends $Command<
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackupPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteBackupPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackupPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackupPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackupPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBackupPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackupPlanCommandOutput> {
    return deserializeAws_restJson1DeleteBackupPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
