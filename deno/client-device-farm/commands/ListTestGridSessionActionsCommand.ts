import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { ListTestGridSessionActionsRequest, ListTestGridSessionActionsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTestGridSessionActionsCommand,
  serializeAws_json1_1ListTestGridSessionActionsCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface ListTestGridSessionActionsCommandInput extends ListTestGridSessionActionsRequest {}
export interface ListTestGridSessionActionsCommandOutput extends ListTestGridSessionActionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionActionsCommand } from "../../client-device-farm/mod.ts";
 * // const { DeviceFarmClient, ListTestGridSessionActionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionActionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionActionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTestGridSessionActionsCommand extends $Command<
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTestGridSessionActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestGridSessionActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTestGridSessionActionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTestGridSessionActionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTestGridSessionActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTestGridSessionActionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTestGridSessionActionsCommandOutput> {
    return deserializeAws_json1_1ListTestGridSessionActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
