import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { ListMultiplexesRequest, ListMultiplexesResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListMultiplexesCommand,
  serializeAws_restJson1ListMultiplexesCommand,
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

export interface ListMultiplexesCommandInput extends ListMultiplexesRequest {}
export interface ListMultiplexesCommandOutput extends ListMultiplexesResponse, __MetadataBearer {}

/**
 * Retrieve a list of the existing multiplexes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexesCommand } from "../../client-medialive/mod.ts";
 * // const { MediaLiveClient, ListMultiplexesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListMultiplexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiplexesCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMultiplexesCommand extends $Command<
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMultiplexesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultiplexesCommandInput, ListMultiplexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListMultiplexesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMultiplexesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMultiplexesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMultiplexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMultiplexesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultiplexesCommandOutput> {
    return deserializeAws_restJson1ListMultiplexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
