import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient.ts";
import { UpdateRecoveryGroupRequest, UpdateRecoveryGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateRecoveryGroupCommand,
  serializeAws_restJson1UpdateRecoveryGroupCommand,
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

export interface UpdateRecoveryGroupCommandInput extends UpdateRecoveryGroupRequest {}
export interface UpdateRecoveryGroupCommandOutput extends UpdateRecoveryGroupResponse, __MetadataBearer {}

/**
 * Updates an existing Recovery Group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, UpdateRecoveryGroupCommand } from "../../client-route53-recovery-readiness/mod.ts";
 * // const { Route53RecoveryReadinessClient, UpdateRecoveryGroupCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new UpdateRecoveryGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecoveryGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRecoveryGroupCommand extends $Command<
  UpdateRecoveryGroupCommandInput,
  UpdateRecoveryGroupCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRecoveryGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRecoveryGroupCommandInput, UpdateRecoveryGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "UpdateRecoveryGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecoveryGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecoveryGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRecoveryGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecoveryGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRecoveryGroupCommandOutput> {
    return deserializeAws_restJson1UpdateRecoveryGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
