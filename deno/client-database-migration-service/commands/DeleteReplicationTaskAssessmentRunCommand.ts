import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import {
  DeleteReplicationTaskAssessmentRunMessage,
  DeleteReplicationTaskAssessmentRunResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand,
  serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand,
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

export interface DeleteReplicationTaskAssessmentRunCommandInput extends DeleteReplicationTaskAssessmentRunMessage {}
export interface DeleteReplicationTaskAssessmentRunCommandOutput
  extends DeleteReplicationTaskAssessmentRunResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the record of a single premigration assessment run.</p>
 *          <p>This operation removes all metadata that AWS DMS maintains about this assessment run.
 *          However, the operation leaves untouched all information about this assessment run that is
 *          stored in your Amazon S3 bucket.</p>
 */
export class DeleteReplicationTaskAssessmentRunCommand extends $Command<
  DeleteReplicationTaskAssessmentRunCommandInput,
  DeleteReplicationTaskAssessmentRunCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReplicationTaskAssessmentRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReplicationTaskAssessmentRunCommandInput, DeleteReplicationTaskAssessmentRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteReplicationTaskAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReplicationTaskAssessmentRunMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReplicationTaskAssessmentRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteReplicationTaskAssessmentRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteReplicationTaskAssessmentRunCommandOutput> {
    return deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
