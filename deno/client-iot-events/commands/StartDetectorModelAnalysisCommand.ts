import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient.ts";
import { StartDetectorModelAnalysisRequest, StartDetectorModelAnalysisResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartDetectorModelAnalysisCommand,
  serializeAws_restJson1StartDetectorModelAnalysisCommand,
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

export interface StartDetectorModelAnalysisCommandInput extends StartDetectorModelAnalysisRequest {}
export interface StartDetectorModelAnalysisCommandOutput extends StartDetectorModelAnalysisResponse, __MetadataBearer {}

/**
 * <p>Performs an analysis of your detector model. For more information,
 *       see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a>
 *       in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, StartDetectorModelAnalysisCommand } from "../../client-iot-events/mod.ts";
 * // const { IoTEventsClient, StartDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new StartDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartDetectorModelAnalysisCommand extends $Command<
  StartDetectorModelAnalysisCommandInput,
  StartDetectorModelAnalysisCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDetectorModelAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDetectorModelAnalysisCommandInput, StartDetectorModelAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "StartDetectorModelAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDetectorModelAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDetectorModelAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDetectorModelAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDetectorModelAnalysisCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDetectorModelAnalysisCommandOutput> {
    return deserializeAws_restJson1StartDetectorModelAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
