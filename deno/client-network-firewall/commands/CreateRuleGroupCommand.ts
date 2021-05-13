import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0CreateRuleGroupCommand,
  serializeAws_json1_0CreateRuleGroupCommand,
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

export interface CreateRuleGroupCommandInput extends CreateRuleGroupRequest {}
export interface CreateRuleGroupCommandOutput extends CreateRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Creates the specified stateless or stateful rule group, which includes the rules for
 *          network traffic inspection, a capacity setting, and tags. </p>
 *          <p>You provide your rule group specification in your request using either
 *             <code>RuleGroup</code> or <code>Rules</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateRuleGroupCommand } from "../../client-network-firewall/mod.ts";
 * // const { NetworkFirewallClient, CreateRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRuleGroupCommand extends $Command<
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRuleGroupCommandInput) {
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
  ): Handler<CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRuleGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRuleGroupCommandOutput> {
    return deserializeAws_json1_0CreateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
