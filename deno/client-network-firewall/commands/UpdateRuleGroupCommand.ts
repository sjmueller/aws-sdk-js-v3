import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0UpdateRuleGroupCommand,
  serializeAws_json1_0UpdateRuleGroupCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface UpdateRuleGroupCommandInput extends UpdateRuleGroupRequest {}
export interface UpdateRuleGroupCommandOutput extends UpdateRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the rule settings for the specified rule group. You use a rule group by
 *          reference in one or more firewall policies. When you modify a rule group, you modify all
 *          firewall policies that use the rule group. </p>
 *          <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the
 *          current <a>RuleGroup</a> object, update the object as needed, and then provide
 *          the updated object to this call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateRuleGroupCommand } from "../../client-network-firewall/mod.ts";
 * // const { NetworkFirewallClient, UpdateRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRuleGroupCommand extends $Command<
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRuleGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuleGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleGroupCommandOutput> {
    return deserializeAws_json1_0UpdateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
