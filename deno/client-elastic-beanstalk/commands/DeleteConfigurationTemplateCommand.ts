import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { DeleteConfigurationTemplateMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteConfigurationTemplateCommand,
  serializeAws_queryDeleteConfigurationTemplateCommand,
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

export interface DeleteConfigurationTemplateCommandInput extends DeleteConfigurationTemplateMessage {}
export interface DeleteConfigurationTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified configuration template.</p>
 *          <note>
 *             <p>When you launch an environment using a configuration template, the environment gets a
 *         copy of the template. You can delete or modify the environment's copy of the template
 *         without affecting the running environment.</p>
 *          </note>
 */
export class DeleteConfigurationTemplateCommand extends $Command<
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationTemplateCommandInput, DeleteConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DeleteConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationTemplateMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConfigurationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationTemplateCommandOutput> {
    return deserializeAws_queryDeleteConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
