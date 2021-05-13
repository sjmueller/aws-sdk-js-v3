import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import {
  ApplicationResourceLifecycleDescriptionMessage,
  UpdateApplicationResourceLifecycleMessage,
} from "../models/models_0.ts";
import {
  deserializeAws_queryUpdateApplicationResourceLifecycleCommand,
  serializeAws_queryUpdateApplicationResourceLifecycleCommand,
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

export interface UpdateApplicationResourceLifecycleCommandInput extends UpdateApplicationResourceLifecycleMessage {}
export interface UpdateApplicationResourceLifecycleCommandOutput
  extends ApplicationResourceLifecycleDescriptionMessage,
    __MetadataBearer {}

/**
 * <p>Modifies lifecycle settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } from "../../client-elastic-beanstalk/mod.ts";
 * // const { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationResourceLifecycleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationResourceLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationResourceLifecycleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateApplicationResourceLifecycleCommand extends $Command<
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApplicationResourceLifecycleCommandInput) {
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
  ): Handler<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationResourceLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationResourceLifecycleMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ApplicationResourceLifecycleDescriptionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApplicationResourceLifecycleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateApplicationResourceLifecycleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput> {
    return deserializeAws_queryUpdateApplicationResourceLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
