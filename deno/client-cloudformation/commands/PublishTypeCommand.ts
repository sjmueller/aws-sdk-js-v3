import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { PublishTypeInput, PublishTypeOutput } from "../models/models_0.ts";
import { deserializeAws_queryPublishTypeCommand, serializeAws_queryPublishTypeCommand } from "../protocols/Aws_query.ts";
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

export interface PublishTypeCommandInput extends PublishTypeInput {}
export interface PublishTypeCommandOutput extends PublishTypeOutput, __MetadataBearer {}

/**
 * <p>Publishes the specified extension to the CloudFormation registry as a public extension
 *          in this region. Public extensions are available for use by all CloudFormation users. For
 *          more information on publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the
 *             <i>CloudFormation CLI User Guide</i>.</p>
 *          <p>To publish an extension, you must be registered as a publisher with CloudFormation. For
 *          more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, PublishTypeCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, PublishTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new PublishTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishTypeCommandInput} for command's `input` shape.
 * @see {@link PublishTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PublishTypeCommand extends $Command<
  PublishTypeCommandInput,
  PublishTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishTypeCommandInput) {
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
  ): Handler<PublishTypeCommandInput, PublishTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "PublishTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: PublishTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPublishTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishTypeCommandOutput> {
    return deserializeAws_queryPublishTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
