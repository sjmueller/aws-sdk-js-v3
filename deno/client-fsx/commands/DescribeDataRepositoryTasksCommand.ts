import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient.ts";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeDataRepositoryTasksCommand,
  serializeAws_json1_1DescribeDataRepositoryTasksCommand,
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

export interface DescribeDataRepositoryTasksCommandInput extends DescribeDataRepositoryTasksRequest {}
export interface DescribeDataRepositoryTasksCommandOutput
  extends DescribeDataRepositoryTasksResponse,
    __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for Lustre data repository tasks, if
 *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
 *             You can use filters to narrow the response to include just tasks for specific file systems,
 *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
 *             by your AWS account in the AWS Region of the endpoint that you're calling.</p>
 *
 *         <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
 *             parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon
 *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 */
export class DescribeDataRepositoryTasksCommand extends $Command<
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDataRepositoryTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeDataRepositoryTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataRepositoryTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataRepositoryTasksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataRepositoryTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDataRepositoryTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataRepositoryTasksCommandOutput> {
    return deserializeAws_json1_1DescribeDataRepositoryTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
