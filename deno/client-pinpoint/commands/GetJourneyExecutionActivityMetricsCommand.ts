import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import {
  GetJourneyExecutionActivityMetricsRequest,
  GetJourneyExecutionActivityMetricsResponse,
} from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand,
  serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand,
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

export interface GetJourneyExecutionActivityMetricsCommandInput extends GetJourneyExecutionActivityMetricsRequest {}
export interface GetJourneyExecutionActivityMetricsCommandOutput
  extends GetJourneyExecutionActivityMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionActivityMetricsCommand } from "../../client-pinpoint/mod.ts";
 * // const { PinpointClient, GetJourneyExecutionActivityMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyExecutionActivityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionActivityMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetJourneyExecutionActivityMetricsCommand extends $Command<
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJourneyExecutionActivityMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJourneyExecutionActivityMetricsCommandInput, GetJourneyExecutionActivityMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyExecutionActivityMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJourneyExecutionActivityMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJourneyExecutionActivityMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetJourneyExecutionActivityMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetJourneyExecutionActivityMetricsCommandOutput> {
    return deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
