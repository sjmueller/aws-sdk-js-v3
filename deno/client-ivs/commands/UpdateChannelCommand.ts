import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient.ts";
import { UpdateChannelRequest, UpdateChannelResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateChannelCommand,
  serializeAws_restJson1UpdateChannelCommand,
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

export interface UpdateChannelCommandInput extends UpdateChannelRequest {}
export interface UpdateChannelCommandOutput extends UpdateChannelResponse, __MetadataBearer {}

/**
 * <p>Updates a channel's configuration. This does not affect an ongoing stream of this channel.
 *       You must stop and restart the stream for the changes to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, UpdateChannelCommand } from "../../client-ivs/mod.ts";
 * // const { IvsClient, UpdateChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateChannelCommand extends $Command<
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateChannelCommandInput, UpdateChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "UpdateChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChannelCommandOutput> {
    return deserializeAws_restJson1UpdateChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
