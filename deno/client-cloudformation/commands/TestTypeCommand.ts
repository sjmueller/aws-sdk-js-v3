import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { TestTypeInput, TestTypeOutput } from "../models/models_0.ts";
import { deserializeAws_queryTestTypeCommand, serializeAws_queryTestTypeCommand } from "../protocols/Aws_query.ts";
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

export interface TestTypeCommandInput extends TestTypeInput {}
export interface TestTypeCommandOutput extends TestTypeOutput, __MetadataBearer {}

/**
 * <p>Tests a registered extension to make sure it meets all necessary requirements for being
 *          published in the CloudFormation registry.</p>
 *          <ul>
 *             <li>
 *                <p>For resource types, this includes passing all contracts tests defined for the
 *                type.</p>
 *             </li>
 *             <li>
 *                <p>For modules, this includes determining if the module's model meets all necessary
 *                requirements.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the
 *             <i>CloudFormation CLI User Guide</i>.</p>
 *          <p>If you do not specify a version, CloudFormation uses the default version of the
 *          extension in your account and region for testing.</p>
 *          <p>To perform testing, CloudFormation assumes the execution role specified when the type
 *          was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
 *          <p>Once you've initiated testing on an extension using <code>TestType</code>, you can use
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test
 *          status description for the extension.</p>
 *          <p>An extension must have a test status of <code>PASSED</code> before it can be published.
 *          For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a>
 *          in the <i>CloudFormation CLI User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, TestTypeCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, TestTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new TestTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestTypeCommandInput} for command's `input` shape.
 * @see {@link TestTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestTypeCommand extends $Command<
  TestTypeCommandInput,
  TestTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestTypeCommandInput) {
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
  ): Handler<TestTypeCommandInput, TestTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "TestTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: TestTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTestTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestTypeCommandOutput> {
    return deserializeAws_queryTestTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
