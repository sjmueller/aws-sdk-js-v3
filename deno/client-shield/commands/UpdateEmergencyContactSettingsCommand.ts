import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { UpdateEmergencyContactSettingsRequest, UpdateEmergencyContactSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateEmergencyContactSettingsCommand,
  serializeAws_json1_1UpdateEmergencyContactSettingsCommand,
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

export interface UpdateEmergencyContactSettingsCommandInput extends UpdateEmergencyContactSettingsRequest {}
export interface UpdateEmergencyContactSettingsCommandOutput
  extends UpdateEmergencyContactSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateEmergencyContactSettingsCommand } from "../../client-shield/mod.ts";
 * // const { ShieldClient, UpdateEmergencyContactSettingsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new UpdateEmergencyContactSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEmergencyContactSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateEmergencyContactSettingsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateEmergencyContactSettingsCommand extends $Command<
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEmergencyContactSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEmergencyContactSettingsCommandInput, UpdateEmergencyContactSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "UpdateEmergencyContactSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEmergencyContactSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEmergencyContactSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateEmergencyContactSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEmergencyContactSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEmergencyContactSettingsCommandOutput> {
    return deserializeAws_json1_1UpdateEmergencyContactSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
