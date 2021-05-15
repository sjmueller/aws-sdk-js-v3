import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient.ts";
import { ListAnomalyDetectorsRequest, ListAnomalyDetectorsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAnomalyDetectorsCommand,
  serializeAws_restJson1ListAnomalyDetectorsCommand,
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

export interface ListAnomalyDetectorsCommandInput extends ListAnomalyDetectorsRequest {}
export interface ListAnomalyDetectorsCommandOutput extends ListAnomalyDetectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the detectors in the current AWS Region.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyDetectorsCommand } from "../../client-lookoutmetrics/mod.ts";
 * // const { LookoutMetricsClient, ListAnomalyDetectorsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAnomalyDetectorsCommand extends $Command<
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAnomalyDetectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomalyDetectorsCommandInput, ListAnomalyDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListAnomalyDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnomalyDetectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAnomalyDetectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnomalyDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomalyDetectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnomalyDetectorsCommandOutput> {
    return deserializeAws_restJson1ListAnomalyDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
