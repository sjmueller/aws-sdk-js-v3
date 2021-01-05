import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient.ts";
import { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryResetDBParameterGroupCommand,
  serializeAws_queryResetDBParameterGroupCommand,
} from "../protocols/Aws_query.ts";
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

export type ResetDBParameterGroupCommandInput = ResetDBParameterGroupMessage;
export type ResetDBParameterGroupCommandOutput = DBParameterGroupNameMessage & __MetadataBearer;

/**
 * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To
 *       reset specific parameters, provide a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the
 *       <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When
 *       resetting the entire group, dynamic parameters are updated immediately and static parameters
 *       are set to <code>pending-reboot</code> to take effect on the next DB instance restart or
 *       <code>RebootDBInstance</code> request.</p>
 */
export class ResetDBParameterGroupCommand extends $Command<
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetDBParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ResetDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetDBParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBParameterGroupNameMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResetDBParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetDBParameterGroupCommandOutput> {
    return deserializeAws_queryResetDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
