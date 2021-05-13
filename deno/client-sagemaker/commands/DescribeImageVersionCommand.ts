import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DescribeImageVersionRequest, DescribeImageVersionResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DescribeImageVersionCommand,
  serializeAws_json1_1DescribeImageVersionCommand,
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

export interface DescribeImageVersionCommandInput extends DescribeImageVersionRequest {}
export interface DescribeImageVersionCommandOutput extends DescribeImageVersionResponse, __MetadataBearer {}

/**
 * <p>Describes a version of a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageVersionCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, DescribeImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeImageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeImageVersionCommand extends $Command<
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImageVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageVersionCommandInput, DescribeImageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeImageVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImageVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImageVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImageVersionCommandOutput> {
    return deserializeAws_json1_1DescribeImageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
