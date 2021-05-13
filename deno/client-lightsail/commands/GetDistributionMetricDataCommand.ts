import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetDistributionMetricDataRequest, GetDistributionMetricDataResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDistributionMetricDataCommand,
  serializeAws_json1_1GetDistributionMetricDataCommand,
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

export interface GetDistributionMetricDataCommandInput extends GetDistributionMetricDataRequest {}
export interface GetDistributionMetricDataCommandOutput extends GetDistributionMetricDataResult, __MetadataBearer {}

/**
 * <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery
 *       network (CDN) distribution.</p>
 *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
 *       Monitor and collect metric data regularly to maintain the reliability, availability, and
 *       performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionMetricDataCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetDistributionMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetDistributionMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDistributionMetricDataCommand extends $Command<
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDistributionMetricDataCommandInput, GetDistributionMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDistributionMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionMetricDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionMetricDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDistributionMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDistributionMetricDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDistributionMetricDataCommandOutput> {
    return deserializeAws_json1_1GetDistributionMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
