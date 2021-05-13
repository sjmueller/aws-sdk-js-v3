import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListSipMediaApplicationsRequest, ListSipMediaApplicationsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListSipMediaApplicationsCommand,
  serializeAws_restJson1ListSipMediaApplicationsCommand,
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

export interface ListSipMediaApplicationsCommandInput extends ListSipMediaApplicationsRequest {}
export interface ListSipMediaApplicationsCommandOutput extends ListSipMediaApplicationsResponse, __MetadataBearer {}

/**
 * <p>Lists the SIP media applications under the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSipMediaApplicationsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, ListSipMediaApplicationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListSipMediaApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSipMediaApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSipMediaApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSipMediaApplicationsCommand extends $Command<
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSipMediaApplicationsCommandInput) {
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
  ): Handler<ListSipMediaApplicationsCommandInput, ListSipMediaApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListSipMediaApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSipMediaApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSipMediaApplicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSipMediaApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSipMediaApplicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSipMediaApplicationsCommandOutput> {
    return deserializeAws_restJson1ListSipMediaApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
