import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient.ts";
import { GetDeviceRegistrationRequest, GetDeviceRegistrationResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDeviceRegistrationCommand,
  serializeAws_restJson1GetDeviceRegistrationCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetDeviceRegistrationCommandInput extends GetDeviceRegistrationRequest {}
export interface GetDeviceRegistrationCommandOutput extends GetDeviceRegistrationResult, __MetadataBearer {}

/**
 * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "../../client-sagemaker-edge/mod.ts";
 * // const { SagemakerEdgeClient, GetDeviceRegistrationCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const command = new GetDeviceRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDeviceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDeviceRegistrationCommand extends $Command<
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
  SagemakerEdgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeviceRegistrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SagemakerEdgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SagemakerEdgeClient";
    const commandName = "GetDeviceRegistrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeviceRegistrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceRegistrationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeviceRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeviceRegistrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceRegistrationCommandOutput> {
    return deserializeAws_restJson1GetDeviceRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
