import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { ListForecastExportJobsRequest, ListForecastExportJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListForecastExportJobsCommand,
  serializeAws_json1_1ListForecastExportJobsCommand,
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

export interface ListForecastExportJobsCommandInput extends ListForecastExportJobsRequest {}
export interface ListForecastExportJobsCommandOutput extends ListForecastExportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation
 *       returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the
 *       complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a>
 *       operation. You can filter the list using an array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastExportJobsCommand } from "../../client-forecast/mod.ts";
 * // const { ForecastClient, ListForecastExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListForecastExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListForecastExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListForecastExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListForecastExportJobsCommand extends $Command<
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListForecastExportJobsCommandInput) {
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
  ): Handler<ListForecastExportJobsCommandInput, ListForecastExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListForecastExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListForecastExportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListForecastExportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListForecastExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListForecastExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListForecastExportJobsCommandOutput> {
    return deserializeAws_json1_1ListForecastExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
