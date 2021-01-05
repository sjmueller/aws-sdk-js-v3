import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListBackupPlanVersionsCommand,
  serializeAws_restJson1ListBackupPlanVersionsCommand,
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

export type ListBackupPlanVersionsCommandInput = ListBackupPlanVersionsInput;
export type ListBackupPlanVersionsCommandOutput = ListBackupPlanVersionsOutput & __MetadataBearer;

/**
 * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
 */
export class ListBackupPlanVersionsCommand extends $Command<
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupPlanVersionsCommandInput) {
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
  ): Handler<ListBackupPlanVersionsCommandInput, ListBackupPlanVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlanVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupPlanVersionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlanVersionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupPlanVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlanVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlanVersionsCommandOutput> {
    return deserializeAws_restJson1ListBackupPlanVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
