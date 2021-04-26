import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { ConfigurationOptionsDescription, DescribeConfigurationOptionsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeConfigurationOptionsCommand,
  serializeAws_queryDescribeConfigurationOptionsCommand,
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

export interface DescribeConfigurationOptionsCommandInput extends DescribeConfigurationOptionsMessage {}
export interface DescribeConfigurationOptionsCommandOutput extends ConfigurationOptionsDescription, __MetadataBearer {}

/**
 * <p>Describes the configuration options that are used in a particular configuration
 *       template or environment, or that a specified solution stack defines. The description includes
 *       the values the options, their default values, and an indication of the required action on a
 *       running environment if an option value is changed.</p>
 */
export class DescribeConfigurationOptionsCommand extends $Command<
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationOptionsCommandInput) {
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
  ): Handler<DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeConfigurationOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationOptionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationOptionsDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConfigurationOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeConfigurationOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationOptionsCommandOutput> {
    return deserializeAws_queryDescribeConfigurationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
