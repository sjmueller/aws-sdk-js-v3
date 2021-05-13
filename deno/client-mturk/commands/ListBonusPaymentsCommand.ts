import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { ListBonusPaymentsRequest, ListBonusPaymentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListBonusPaymentsCommand,
  serializeAws_json1_1ListBonusPaymentsCommand,
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

export interface ListBonusPaymentsCommandInput extends ListBonusPaymentsRequest {}
export interface ListBonusPaymentsCommandOutput extends ListBonusPaymentsResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListBonusPayments</code>
 *             operation retrieves the amounts of bonuses you have paid to Workers
 *             for a given HIT or assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListBonusPaymentsCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, ListBonusPaymentsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListBonusPaymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBonusPaymentsCommandInput} for command's `input` shape.
 * @see {@link ListBonusPaymentsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBonusPaymentsCommand extends $Command<
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBonusPaymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListBonusPaymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBonusPaymentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBonusPaymentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBonusPaymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBonusPaymentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBonusPaymentsCommandOutput> {
    return deserializeAws_json1_1ListBonusPaymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
