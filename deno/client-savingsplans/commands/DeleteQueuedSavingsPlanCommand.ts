import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient.ts";
import { DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteQueuedSavingsPlanCommand,
  serializeAws_restJson1DeleteQueuedSavingsPlanCommand,
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

export interface DeleteQueuedSavingsPlanCommandInput extends DeleteQueuedSavingsPlanRequest {}
export interface DeleteQueuedSavingsPlanCommandOutput extends DeleteQueuedSavingsPlanResponse, __MetadataBearer {}

/**
 * <p>Deletes the queued purchase for the specified Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DeleteQueuedSavingsPlanCommand } from "../../client-savingsplans/mod.ts";
 * // const { SavingsplansClient, DeleteQueuedSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DeleteQueuedSavingsPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueuedSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteQueuedSavingsPlanCommand extends $Command<
  DeleteQueuedSavingsPlanCommandInput,
  DeleteQueuedSavingsPlanCommandOutput,
  SavingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQueuedSavingsPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueuedSavingsPlanCommandInput, DeleteQueuedSavingsPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DeleteQueuedSavingsPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQueuedSavingsPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteQueuedSavingsPlanResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQueuedSavingsPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteQueuedSavingsPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQueuedSavingsPlanCommandOutput> {
    return deserializeAws_restJson1DeleteQueuedSavingsPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
