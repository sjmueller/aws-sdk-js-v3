import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribeMaintenanceWindowTasksRequest, DescribeMaintenanceWindowTasksResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand,
  serializeAws_json1_1DescribeMaintenanceWindowTasksCommand,
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

export interface DescribeMaintenanceWindowTasksCommandInput extends DescribeMaintenanceWindowTasksRequest {}
export interface DescribeMaintenanceWindowTasksCommandOutput
  extends DescribeMaintenanceWindowTasksResult,
    __MetadataBearer {}

/**
 * <p>Lists the tasks in a maintenance window.</p>
 *          <note>
 *             <p>For maintenance window tasks without a specified target, you cannot supply values for
 *      <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a
 *     placeholder value of <code>1</code>, which may be reported in the response to this command.
 *     These values do not affect the running of your task and can be ignored.</p>
 *          </note>
 */
export class DescribeMaintenanceWindowTasksCommand extends $Command<
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceWindowTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowTasksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMaintenanceWindowTasksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowTasksCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
