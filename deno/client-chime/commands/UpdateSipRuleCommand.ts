import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdateSipRuleRequest, UpdateSipRuleResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateSipRuleCommand,
  serializeAws_restJson1UpdateSipRuleCommand,
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

export interface UpdateSipRuleCommandInput extends UpdateSipRuleRequest {}
export interface UpdateSipRuleCommandOutput extends UpdateSipRuleResponse, __MetadataBearer {}

/**
 * <p>Updates the details of the specified SIP rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateSipRuleCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, UpdateSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSipRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateSipRuleCommand extends $Command<
  UpdateSipRuleCommandInput,
  UpdateSipRuleCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSipRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateSipRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSipRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSipRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSipRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSipRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSipRuleCommandOutput> {
    return deserializeAws_restJson1UpdateSipRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
