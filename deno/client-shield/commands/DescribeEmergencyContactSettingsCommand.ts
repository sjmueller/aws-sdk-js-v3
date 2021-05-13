import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { DescribeEmergencyContactSettingsRequest, DescribeEmergencyContactSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEmergencyContactSettingsCommand,
  serializeAws_json1_1DescribeEmergencyContactSettingsCommand,
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

export interface DescribeEmergencyContactSettingsCommandInput extends DescribeEmergencyContactSettingsRequest {}
export interface DescribeEmergencyContactSettingsCommandOutput
  extends DescribeEmergencyContactSettingsResponse,
    __MetadataBearer {}

/**
 * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeEmergencyContactSettingsCommand } from "../../client-shield/mod.ts";
 * // const { ShieldClient, DescribeEmergencyContactSettingsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeEmergencyContactSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEmergencyContactSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeEmergencyContactSettingsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEmergencyContactSettingsCommand extends $Command<
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEmergencyContactSettingsCommandInput) {
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
  ): Handler<DescribeEmergencyContactSettingsCommandInput, DescribeEmergencyContactSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeEmergencyContactSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEmergencyContactSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEmergencyContactSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEmergencyContactSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEmergencyContactSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEmergencyContactSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeEmergencyContactSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
