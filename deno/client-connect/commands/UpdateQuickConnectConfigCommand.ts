import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { UpdateQuickConnectConfigRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateQuickConnectConfigCommand,
  serializeAws_restJson1UpdateQuickConnectConfigCommand,
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

export interface UpdateQuickConnectConfigCommandInput extends UpdateQuickConnectConfigRequest {}
export interface UpdateQuickConnectConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the configuration settings for the specified quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQuickConnectConfigCommand } from "../../client-connect/mod.ts";
 * // const { ConnectClient, UpdateQuickConnectConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQuickConnectConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuickConnectConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickConnectConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateQuickConnectConfigCommand extends $Command<
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateQuickConnectConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateQuickConnectConfigCommandInput, UpdateQuickConnectConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateQuickConnectConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateQuickConnectConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateQuickConnectConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateQuickConnectConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateQuickConnectConfigCommandOutput> {
    return deserializeAws_restJson1UpdateQuickConnectConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
