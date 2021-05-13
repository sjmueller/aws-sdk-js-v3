import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { StopMonitoringMembersRequest, StopMonitoringMembersResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StopMonitoringMembersCommand,
  serializeAws_restJson1StopMonitoringMembersCommand,
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

export interface StopMonitoringMembersCommandInput extends StopMonitoringMembersRequest {}
export interface StopMonitoringMembersCommandOutput extends StopMonitoringMembersResponse, __MetadataBearer {}

/**
 * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
 *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
 *       accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StopMonitoringMembersCommand } from "../../client-guardduty/mod.ts";
 * // const { GuardDutyClient, StopMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StopMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopMonitoringMembersCommand extends $Command<
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopMonitoringMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopMonitoringMembersCommandInput, StopMonitoringMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "StopMonitoringMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopMonitoringMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopMonitoringMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopMonitoringMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopMonitoringMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMonitoringMembersCommandOutput> {
    return deserializeAws_restJson1StopMonitoringMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
