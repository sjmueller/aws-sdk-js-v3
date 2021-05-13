import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeFeatureTransformationCommand,
  serializeAws_json1_1DescribeFeatureTransformationCommand,
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

export interface DescribeFeatureTransformationCommandInput extends DescribeFeatureTransformationRequest {}
export interface DescribeFeatureTransformationCommandOutput
  extends DescribeFeatureTransformationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the given feature transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFeatureTransformationCommand } from "../../client-personalize/mod.ts";
 * // const { PersonalizeClient, DescribeFeatureTransformationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeFeatureTransformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeatureTransformationCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureTransformationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFeatureTransformationCommand extends $Command<
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFeatureTransformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeFeatureTransformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFeatureTransformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFeatureTransformationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFeatureTransformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFeatureTransformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFeatureTransformationCommandOutput> {
    return deserializeAws_json1_1DescribeFeatureTransformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
