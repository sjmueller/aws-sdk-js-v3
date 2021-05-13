import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListTopicRuleDestinationsCommand,
  serializeAws_restJson1ListTopicRuleDestinationsCommand,
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

export interface ListTopicRuleDestinationsCommandInput extends ListTopicRuleDestinationsRequest {}
export interface ListTopicRuleDestinationsCommandOutput extends ListTopicRuleDestinationsResponse, __MetadataBearer {}

/**
 * <p>Lists all the topic rule destinations in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRuleDestinationsCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, ListTopicRuleDestinationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTopicRuleDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicRuleDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListTopicRuleDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTopicRuleDestinationsCommand extends $Command<
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTopicRuleDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListTopicRuleDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTopicRuleDestinationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTopicRuleDestinationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTopicRuleDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTopicRuleDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTopicRuleDestinationsCommandOutput> {
    return deserializeAws_restJson1ListTopicRuleDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
