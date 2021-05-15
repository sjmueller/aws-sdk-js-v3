import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient.ts";
import { ListTimelineEventsInput, ListTimelineEventsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListTimelineEventsCommand,
  serializeAws_restJson1ListTimelineEventsCommand,
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

export interface ListTimelineEventsCommandInput extends ListTimelineEventsInput {}
export interface ListTimelineEventsCommandOutput extends ListTimelineEventsOutput, __MetadataBearer {}

/**
 * <p>Lists timeline events of the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, ListTimelineEventsCommand } from "../../client-commander/mod.ts";
 * // const { CommanderClient, ListTimelineEventsCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new ListTimelineEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTimelineEventsCommandInput} for command's `input` shape.
 * @see {@link ListTimelineEventsCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTimelineEventsCommand extends $Command<
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTimelineEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CommanderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "ListTimelineEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTimelineEventsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTimelineEventsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTimelineEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTimelineEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTimelineEventsCommandOutput> {
    return deserializeAws_restJson1ListTimelineEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
