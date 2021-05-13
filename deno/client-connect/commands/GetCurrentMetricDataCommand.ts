import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { GetCurrentMetricDataRequest, GetCurrentMetricDataResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetCurrentMetricDataCommand,
  serializeAws_restJson1GetCurrentMetricDataCommand,
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

export interface GetCurrentMetricDataCommandInput extends GetCurrentMetricDataRequest {}
export interface GetCurrentMetricDataCommandOutput extends GetCurrentMetricDataResponse, __MetadataBearer {}

/**
 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
 *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
 *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentMetricDataCommand } from "../../client-connect/mod.ts";
 * // const { ConnectClient, GetCurrentMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetCurrentMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentMetricDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCurrentMetricDataCommand extends $Command<
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCurrentMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetCurrentMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCurrentMetricDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCurrentMetricDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCurrentMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCurrentMetricDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCurrentMetricDataCommandOutput> {
    return deserializeAws_restJson1GetCurrentMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
