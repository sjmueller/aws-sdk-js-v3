import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { UpdateBaiduChannelRequest, UpdateBaiduChannelResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateBaiduChannelCommand,
  serializeAws_restJson1UpdateBaiduChannelCommand,
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

export interface UpdateBaiduChannelCommandInput extends UpdateBaiduChannelRequest {}
export interface UpdateBaiduChannelCommandOutput extends UpdateBaiduChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateBaiduChannelCommand } from "../../client-pinpoint/mod.ts";
 * // const { PinpointClient, UpdateBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateBaiduChannelCommand extends $Command<
  UpdateBaiduChannelCommandInput,
  UpdateBaiduChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBaiduChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBaiduChannelCommandInput, UpdateBaiduChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateBaiduChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBaiduChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBaiduChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBaiduChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBaiduChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBaiduChannelCommandOutput> {
    return deserializeAws_restJson1UpdateBaiduChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
