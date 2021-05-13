import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { ListOfferingTransactionsRequest, ListOfferingTransactionsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListOfferingTransactionsCommand,
  serializeAws_json1_1ListOfferingTransactionsCommand,
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

export interface ListOfferingTransactionsCommandInput extends ListOfferingTransactionsRequest {}
export interface ListOfferingTransactionsCommandOutput extends ListOfferingTransactionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
 *             account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
 *             The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If
 *             you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingTransactionsCommand } from "../../client-device-farm/mod.ts";
 * // const { DeviceFarmClient, ListOfferingTransactionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListOfferingTransactionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingTransactionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListOfferingTransactionsCommand extends $Command<
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOfferingTransactionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListOfferingTransactionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOfferingTransactionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOfferingTransactionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOfferingTransactionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOfferingTransactionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingTransactionsCommandOutput> {
    return deserializeAws_json1_1ListOfferingTransactionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
