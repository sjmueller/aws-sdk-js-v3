import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient.ts";
import { CreateTimelineEventInput, CreateTimelineEventOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateTimelineEventCommand,
  serializeAws_restJson1CreateTimelineEventCommand,
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

export interface CreateTimelineEventCommandInput extends CreateTimelineEventInput {}
export interface CreateTimelineEventCommandOutput extends CreateTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Creates a custom timeline event on the incident details page of an incident record.
 *             Timeline events are automatically created by Incident Manager, marking key moment during an
 *             incident. You can create custom timeline events to mark important events that are
 *             automatically detected by Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, CreateTimelineEventCommand } from "../../client-commander/mod.ts";
 * // const { CommanderClient, CreateTimelineEventCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new CreateTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link CreateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTimelineEventCommand extends $Command<
  CreateTimelineEventCommandInput,
  CreateTimelineEventCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTimelineEventCommandInput) {
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
  ): Handler<CreateTimelineEventCommandInput, CreateTimelineEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "CreateTimelineEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTimelineEventInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTimelineEventOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTimelineEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTimelineEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTimelineEventCommandOutput> {
    return deserializeAws_restJson1CreateTimelineEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
