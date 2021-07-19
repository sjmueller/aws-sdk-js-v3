import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { BatchDescribeTypeConfigurationsInput, BatchDescribeTypeConfigurationsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryBatchDescribeTypeConfigurationsCommand,
  serializeAws_queryBatchDescribeTypeConfigurationsCommand,
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

export interface BatchDescribeTypeConfigurationsCommandInput extends BatchDescribeTypeConfigurationsInput {}
export interface BatchDescribeTypeConfigurationsCommandOutput
  extends BatchDescribeTypeConfigurationsOutput,
    __MetadataBearer {}

/**
 * <p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new BatchDescribeTypeConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDescribeTypeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeTypeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDescribeTypeConfigurationsCommand extends $Command<
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDescribeTypeConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDescribeTypeConfigurationsCommandInput, BatchDescribeTypeConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "BatchDescribeTypeConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDescribeTypeConfigurationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDescribeTypeConfigurationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDescribeTypeConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryBatchDescribeTypeConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDescribeTypeConfigurationsCommandOutput> {
    return deserializeAws_queryBatchDescribeTypeConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
