import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient.ts";
import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeConfigurationRevisionCommand,
  serializeAws_restJson1DescribeConfigurationRevisionCommand,
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

export type DescribeConfigurationRevisionCommandInput = DescribeConfigurationRevisionRequest;
export type DescribeConfigurationRevisionCommandOutput = DescribeConfigurationRevisionResponse & __MetadataBearer;

/**
 * Returns the specified configuration revision for the specified configuration.
 */
export class DescribeConfigurationRevisionCommand extends $Command<
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationRevisionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeConfigurationRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationRevisionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationRevisionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConfigurationRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConfigurationRevisionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRevisionCommandOutput> {
    return deserializeAws_restJson1DescribeConfigurationRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
