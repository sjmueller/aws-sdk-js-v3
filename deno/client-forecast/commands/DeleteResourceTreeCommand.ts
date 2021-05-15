import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { DeleteResourceTreeRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteResourceTreeCommand,
  serializeAws_json1_1DeleteResourceTreeCommand,
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

export interface DeleteResourceTreeCommandInput extends DeleteResourceTreeRequest {}
export interface DeleteResourceTreeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an entire resource tree. This operation will delete the parent resource and
 *             its child resources.</p>
 *         <p>Child resources are resources that were created from another resource. For example,
 *             when a forecast is generated from a predictor, the forecast is the child resource and
 *             the predictor is the parent resource.</p>
 *         <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Dataset Group</b>: predictors, predictor backtest
 *                     export jobs, forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Dataset</b>: dataset import jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Predictor</b>: predictor backtest export jobs,
 *                     forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Forecast</b>: forecast export jobs</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>
 *                <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not
 *                 delete datasets or exported files stored in Amazon S3. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteResourceTreeCommand } from "../../client-forecast/mod.ts";
 * // const { ForecastClient, DeleteResourceTreeCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteResourceTreeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceTreeCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceTreeCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteResourceTreeCommand extends $Command<
  DeleteResourceTreeCommandInput,
  DeleteResourceTreeCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResourceTreeCommandInput) {
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
  ): Handler<DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteResourceTreeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourceTreeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourceTreeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResourceTreeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceTreeCommandOutput> {
    return deserializeAws_json1_1DeleteResourceTreeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
