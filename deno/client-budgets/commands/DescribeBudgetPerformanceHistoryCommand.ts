import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient.ts";
import { DescribeBudgetPerformanceHistoryRequest, DescribeBudgetPerformanceHistoryResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand,
  serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand,
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

export interface DescribeBudgetPerformanceHistoryCommandInput extends DescribeBudgetPerformanceHistoryRequest {}
export interface DescribeBudgetPerformanceHistoryCommandOutput
  extends DescribeBudgetPerformanceHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } from "../../client-budgets/mod.ts";
 * // const { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetPerformanceHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetPerformanceHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetPerformanceHistoryCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeBudgetPerformanceHistoryCommand extends $Command<
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBudgetPerformanceHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetPerformanceHistoryCommandInput, DescribeBudgetPerformanceHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetPerformanceHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBudgetPerformanceHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetPerformanceHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBudgetPerformanceHistoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetPerformanceHistoryCommandOutput> {
    return deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
