import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient.ts";
import { DescribeProblemObservationsRequest, DescribeProblemObservationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeProblemObservationsCommand,
  serializeAws_json1_1DescribeProblemObservationsCommand,
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

export interface DescribeProblemObservationsCommandInput extends DescribeProblemObservationsRequest {}
export interface DescribeProblemObservationsCommandOutput
  extends DescribeProblemObservationsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the anomalies or errors associated with the problem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeProblemObservationsCommand } from "../../client-application-insights/mod.ts";
 * // const { ApplicationInsightsClient, DescribeProblemObservationsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeProblemObservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProblemObservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeProblemObservationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeProblemObservationsCommand extends $Command<
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProblemObservationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProblemObservationsCommandInput, DescribeProblemObservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeProblemObservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProblemObservationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProblemObservationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProblemObservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProblemObservationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProblemObservationsCommandOutput> {
    return deserializeAws_json1_1DescribeProblemObservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
