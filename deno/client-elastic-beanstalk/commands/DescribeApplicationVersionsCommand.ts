import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeApplicationVersionsCommand,
  serializeAws_queryDescribeApplicationVersionsCommand,
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

export interface DescribeApplicationVersionsCommandInput extends DescribeApplicationVersionsMessage {}
export interface DescribeApplicationVersionsCommandOutput
  extends ApplicationVersionDescriptionsMessage,
    __MetadataBearer {}

/**
 * <p>Retrieve a list of application versions.</p>
 */
export class DescribeApplicationVersionsCommand extends $Command<
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeApplicationVersionsCommandInput) {
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
  ): Handler<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeApplicationVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeApplicationVersionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ApplicationVersionDescriptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeApplicationVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeApplicationVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationVersionsCommandOutput> {
    return deserializeAws_queryDescribeApplicationVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
