import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient.ts";
import { ExecuteBudgetActionRequest, ExecuteBudgetActionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ExecuteBudgetActionCommand,
  serializeAws_json1_1ExecuteBudgetActionCommand,
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

export interface ExecuteBudgetActionCommandInput extends ExecuteBudgetActionRequest {}
export interface ExecuteBudgetActionCommandOutput extends ExecuteBudgetActionResponse, __MetadataBearer {}

/**
 * <p>
 *          Executes a budget action.
 *       </p>
 */
export class ExecuteBudgetActionCommand extends $Command<
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteBudgetActionCommandInput) {
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
  ): Handler<ExecuteBudgetActionCommandInput, ExecuteBudgetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "ExecuteBudgetActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteBudgetActionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteBudgetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExecuteBudgetActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteBudgetActionCommandOutput> {
    return deserializeAws_json1_1ExecuteBudgetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
