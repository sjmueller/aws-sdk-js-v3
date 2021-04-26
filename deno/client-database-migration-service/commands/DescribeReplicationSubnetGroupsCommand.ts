import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { DescribeReplicationSubnetGroupsMessage, DescribeReplicationSubnetGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand,
  serializeAws_json1_1DescribeReplicationSubnetGroupsCommand,
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

export interface DescribeReplicationSubnetGroupsCommandInput extends DescribeReplicationSubnetGroupsMessage {}
export interface DescribeReplicationSubnetGroupsCommandOutput
  extends DescribeReplicationSubnetGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the replication subnet groups.</p>
 */
export class DescribeReplicationSubnetGroupsCommand extends $Command<
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplicationSubnetGroupsCommandInput) {
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
  ): Handler<DescribeReplicationSubnetGroupsCommandInput, DescribeReplicationSubnetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationSubnetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationSubnetGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationSubnetGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationSubnetGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationSubnetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationSubnetGroupsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
