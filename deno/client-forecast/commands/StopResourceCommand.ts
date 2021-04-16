import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { StopResourceRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopResourceCommand,
  serializeAws_json1_1StopResourceCommand,
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

export type StopResourceCommandInput = StopResourceRequest;
export type StopResourceCommandOutput = __MetadataBearer;

/**
 * <p>Stops a resource.</p>
 *          <p>The resource undergoes the following states:
 *          <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume
 *          a resource once it has been stopped.</p>
 *          <p>This operation can be applied to the following resources (and their corresponding child
 *          resources):</p>
 *          <ul>
 *             <li>
 *                <p>Dataset Import Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Job</p>
 *             </li>
 *             <li>
 *                <p>Forecast Export Job</p>
 *             </li>
 *             <li>
 *                <p>Predictor Backtest Export Job</p>
 *             </li>
 *          </ul>
 */
export class StopResourceCommand extends $Command<
  StopResourceCommandInput,
  StopResourceCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopResourceCommandInput, StopResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "StopResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopResourceCommandOutput> {
    return deserializeAws_json1_1StopResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
