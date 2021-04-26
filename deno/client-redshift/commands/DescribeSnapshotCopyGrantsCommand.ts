import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeSnapshotCopyGrantsMessage, SnapshotCopyGrantMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeSnapshotCopyGrantsCommand,
  serializeAws_queryDescribeSnapshotCopyGrantsCommand,
} from "../protocols/Aws_query.ts";
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

export interface DescribeSnapshotCopyGrantsCommandInput extends DescribeSnapshotCopyGrantsMessage {}
export interface DescribeSnapshotCopyGrantsCommandOutput extends SnapshotCopyGrantMessage, __MetadataBearer {}

/**
 * <p>Returns a list of snapshot copy grants owned by the AWS account in the destination
 *             region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export class DescribeSnapshotCopyGrantsCommand extends $Command<
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotCopyGrantsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeSnapshotCopyGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotCopyGrantsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SnapshotCopyGrantMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotCopyGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSnapshotCopyGrantsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput> {
    return deserializeAws_queryDescribeSnapshotCopyGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
