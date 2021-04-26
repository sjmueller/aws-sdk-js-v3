import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateRuleGroupCommand,
  serializeAws_json1_1UpdateRuleGroupCommand,
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

export interface UpdateRuleGroupCommandInput extends UpdateRuleGroupRequest {}
export interface UpdateRuleGroupCommandOutput extends UpdateRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the specified <a>RuleGroup</a>.</p>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 */
export class UpdateRuleGroupCommand extends $Command<
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
  WAFV2ClientResolvedConfig
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
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
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
    return serializeAws_json1_1UpdateRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleGroupCommandOutput> {
    return deserializeAws_json1_1UpdateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
