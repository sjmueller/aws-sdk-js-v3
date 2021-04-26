import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DeleteStackSetInput, DeleteStackSetOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteStackSetCommand,
  serializeAws_queryDeleteStackSetCommand,
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

export interface DeleteStackSetCommandInput extends DeleteStackSetInput {}
export interface DeleteStackSetCommandOutput extends DeleteStackSetOutput, __MetadataBearer {}

/**
 * <p>Deletes a stack set. Before you can delete a stack set, all of its member stack
 *          instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>. </p>
 */
export class DeleteStackSetCommand extends $Command<
  DeleteStackSetCommandInput,
  DeleteStackSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStackSetCommandInput, DeleteStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DeleteStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStackSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteStackSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStackSetCommandOutput> {
    return deserializeAws_queryDeleteStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
