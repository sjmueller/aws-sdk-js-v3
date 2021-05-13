import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { ListPublishingDestinationsRequest, ListPublishingDestinationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPublishingDestinationsCommand,
  serializeAws_restJson1ListPublishingDestinationsCommand,
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

export interface ListPublishingDestinationsCommandInput extends ListPublishingDestinationsRequest {}
export interface ListPublishingDestinationsCommandOutput extends ListPublishingDestinationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of publishing destinations associated with the specified
 *         <code>dectectorId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListPublishingDestinationsCommand } from "../../client-guardduty/mod.ts";
 * // const { GuardDutyClient, ListPublishingDestinationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListPublishingDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublishingDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListPublishingDestinationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPublishingDestinationsCommand extends $Command<
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPublishingDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPublishingDestinationsCommandInput, ListPublishingDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "ListPublishingDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPublishingDestinationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPublishingDestinationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPublishingDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPublishingDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPublishingDestinationsCommandOutput> {
    return deserializeAws_restJson1ListPublishingDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
