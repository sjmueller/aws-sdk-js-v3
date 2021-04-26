import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DeleteStackInstancesInput, DeleteStackInstancesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteStackInstancesCommand,
  serializeAws_queryDeleteStackInstancesCommand,
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

export interface DeleteStackInstancesCommandInput extends DeleteStackInstancesInput {}
export interface DeleteStackInstancesCommandOutput extends DeleteStackInstancesOutput, __MetadataBearer {}

/**
 * <p>Deletes stack instances for the specified accounts, in the specified Regions. </p>
 */
export class DeleteStackInstancesCommand extends $Command<
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStackInstancesCommandInput) {
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
  ): Handler<DeleteStackInstancesCommandInput, DeleteStackInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DeleteStackInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStackInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStackInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStackInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteStackInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStackInstancesCommandOutput> {
    return deserializeAws_queryDeleteStackInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
