import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient.ts";
import { GetDetectorModelAnalysisResultsRequest, GetDetectorModelAnalysisResultsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand,
  serializeAws_restJson1GetDetectorModelAnalysisResultsCommand,
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

export interface GetDetectorModelAnalysisResultsCommandInput extends GetDetectorModelAnalysisResultsRequest {}
export interface GetDetectorModelAnalysisResultsCommandOutput
  extends GetDetectorModelAnalysisResultsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves one or more analysis results of the detector model.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } from "../../client-iot-events/mod.ts";
 * // const { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new GetDetectorModelAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorModelAnalysisResultsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorModelAnalysisResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDetectorModelAnalysisResultsCommand extends $Command<
  GetDetectorModelAnalysisResultsCommandInput,
  GetDetectorModelAnalysisResultsCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDetectorModelAnalysisResultsCommandInput) {
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
  ): Handler<GetDetectorModelAnalysisResultsCommandInput, GetDetectorModelAnalysisResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "GetDetectorModelAnalysisResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDetectorModelAnalysisResultsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDetectorModelAnalysisResultsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDetectorModelAnalysisResultsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDetectorModelAnalysisResultsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDetectorModelAnalysisResultsCommandOutput> {
    return deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
