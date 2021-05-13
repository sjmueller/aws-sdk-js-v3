import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListAttendeeTagsRequest, ListAttendeeTagsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListAttendeeTagsCommand,
  serializeAws_restJson1ListAttendeeTagsCommand,
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

export interface ListAttendeeTagsCommandInput extends ListAttendeeTagsRequest {}
export interface ListAttendeeTagsCommandOutput extends ListAttendeeTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAttendeeTagsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, ListAttendeeTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAttendeeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttendeeTagsCommandInput} for command's `input` shape.
 * @see {@link ListAttendeeTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAttendeeTagsCommand extends $Command<
  ListAttendeeTagsCommandInput,
  ListAttendeeTagsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttendeeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttendeeTagsCommandInput, ListAttendeeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAttendeeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttendeeTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttendeeTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttendeeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAttendeeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttendeeTagsCommandOutput> {
    return deserializeAws_restJson1ListAttendeeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
