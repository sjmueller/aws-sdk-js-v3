import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand,
  serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand,
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

export interface DescribeReplicationTaskAssessmentResultsCommandInput
  extends DescribeReplicationTaskAssessmentResultsMessage {}
export interface DescribeReplicationTaskAssessmentResultsCommandOutput
  extends DescribeReplicationTaskAssessmentResultsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your
 *           account.  This action always returns the
 *          latest results.</p>
 *          <p>For more information about DMS task assessments, see
 *            <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a>
 *            in the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/dms/latest/userguide/Welcome.html">
 *                Database Migration Service User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } from "../../client-database-migration-service/mod.ts";
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTaskAssessmentResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeReplicationTaskAssessmentResultsCommand extends $Command<
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplicationTaskAssessmentResultsCommandInput) {
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
  ): Handler<
    DescribeReplicationTaskAssessmentResultsCommandInput,
    DescribeReplicationTaskAssessmentResultsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTaskAssessmentResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationTaskAssessmentResultsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationTaskAssessmentResultsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationTaskAssessmentResultsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
