import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeLoggingStatusMessage, LoggingStatus } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeLoggingStatusCommand,
  serializeAws_queryDescribeLoggingStatusCommand,
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

export interface DescribeLoggingStatusCommandInput extends DescribeLoggingStatusMessage {}
export interface DescribeLoggingStatusCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * <p>Describes whether information, such as queries and connection attempts, is being
 *             logged for the specified Amazon Redshift cluster.</p>
 */
export class DescribeLoggingStatusCommand extends $Command<
  DescribeLoggingStatusCommandInput,
  DescribeLoggingStatusCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoggingStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoggingStatusCommandInput, DescribeLoggingStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeLoggingStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoggingStatusMessage.filterSensitiveLog,
      outputFilterSensitiveLog: LoggingStatus.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoggingStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoggingStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoggingStatusCommandOutput> {
    return deserializeAws_queryDescribeLoggingStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
