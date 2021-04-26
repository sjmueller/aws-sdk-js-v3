import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { DescribeQueriesRequest, DescribeQueriesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeQueriesCommand,
  serializeAws_json1_1DescribeQueriesCommand,
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

export interface DescribeQueriesCommandInput extends DescribeQueriesRequest {}
export interface DescribeQueriesCommandOutput extends DescribeQueriesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have
 *       been executed recently in this account. You can request all queries or limit it to queries of
 *       a specific log group or queries with a certain status.</p>
 */
export class DescribeQueriesCommand extends $Command<
  DescribeQueriesCommandInput,
  DescribeQueriesCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeQueriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeQueriesCommandInput, DescribeQueriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeQueriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeQueriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeQueriesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeQueriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeQueriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeQueriesCommandOutput> {
    return deserializeAws_json1_1DescribeQueriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
