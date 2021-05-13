import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DescribeDeviceFleetRequest, DescribeDeviceFleetResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DescribeDeviceFleetCommand,
  serializeAws_json1_1DescribeDeviceFleetCommand,
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

export interface DescribeDeviceFleetCommandInput extends DescribeDeviceFleetRequest {}
export interface DescribeDeviceFleetCommandOutput extends DescribeDeviceFleetResponse, __MetadataBearer {}

/**
 * <p>A description of the fleet the device belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDeviceFleetCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, DescribeDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDeviceFleetCommand extends $Command<
  DescribeDeviceFleetCommandInput,
  DescribeDeviceFleetCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDeviceFleetCommandInput) {
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
  ): Handler<DescribeDeviceFleetCommandInput, DescribeDeviceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeDeviceFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeviceFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeviceFleetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeviceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDeviceFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeviceFleetCommandOutput> {
    return deserializeAws_json1_1DescribeDeviceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
