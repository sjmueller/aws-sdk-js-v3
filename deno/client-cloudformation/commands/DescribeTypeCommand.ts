import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0.ts";
import { deserializeAws_queryDescribeTypeCommand, serializeAws_queryDescribeTypeCommand } from "../protocols/Aws_query.ts";
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

export interface DescribeTypeCommandInput extends DescribeTypeInput {}
export interface DescribeTypeCommandOutput extends DescribeTypeOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about an extension that has been registered.</p>
 *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information
 *          about that specific extension version. Otherwise, it returns information about the default
 *          extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, DescribeTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTypeCommand extends $Command<
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTypeCommandInput) {
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
  ): Handler<DescribeTypeCommandInput, DescribeTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTypeCommandOutput> {
    return deserializeAws_queryDescribeTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
