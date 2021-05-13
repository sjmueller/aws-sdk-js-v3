import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateAccountAuditConfigurationRequest, UpdateAccountAuditConfigurationResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1UpdateAccountAuditConfigurationCommand,
  serializeAws_restJson1UpdateAccountAuditConfigurationCommand,
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

export interface UpdateAccountAuditConfigurationCommandInput extends UpdateAccountAuditConfigurationRequest {}
export interface UpdateAccountAuditConfigurationCommandOutput
  extends UpdateAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Configures or reconfigures the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAccountAuditConfigurationCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, UpdateAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAccountAuditConfigurationCommand extends $Command<
  UpdateAccountAuditConfigurationCommandInput,
  UpdateAccountAuditConfigurationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAccountAuditConfigurationCommandInput) {
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
  ): Handler<UpdateAccountAuditConfigurationCommandInput, UpdateAccountAuditConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateAccountAuditConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountAuditConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccountAuditConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAccountAuditConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAccountAuditConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountAuditConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateAccountAuditConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
