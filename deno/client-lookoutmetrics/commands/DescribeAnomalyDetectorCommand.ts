import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient.ts";
import { DescribeAnomalyDetectorRequest, DescribeAnomalyDetectorResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeAnomalyDetectorCommand,
  serializeAws_restJson1DescribeAnomalyDetectorCommand,
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

export interface DescribeAnomalyDetectorCommandInput extends DescribeAnomalyDetectorRequest {}
export interface DescribeAnomalyDetectorCommandOutput extends DescribeAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Describes a detector.</p>
 */
export class DescribeAnomalyDetectorCommand extends $Command<
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnomalyDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnomalyDetectorCommandInput, DescribeAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnomalyDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnomalyDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnomalyDetectorCommandOutput> {
    return deserializeAws_restJson1DescribeAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
