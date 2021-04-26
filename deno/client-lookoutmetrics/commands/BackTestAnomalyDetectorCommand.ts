import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient.ts";
import { BackTestAnomalyDetectorRequest, BackTestAnomalyDetectorResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BackTestAnomalyDetectorCommand,
  serializeAws_restJson1BackTestAnomalyDetectorCommand,
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

export interface BackTestAnomalyDetectorCommandInput extends BackTestAnomalyDetectorRequest {}
export interface BackTestAnomalyDetectorCommandOutput extends BackTestAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Runs a backtest for anomaly detection for the specified resource.</p>
 */
export class BackTestAnomalyDetectorCommand extends $Command<
  BackTestAnomalyDetectorCommandInput,
  BackTestAnomalyDetectorCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BackTestAnomalyDetectorCommandInput) {
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
  ): Handler<BackTestAnomalyDetectorCommandInput, BackTestAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "BackTestAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BackTestAnomalyDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BackTestAnomalyDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BackTestAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BackTestAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BackTestAnomalyDetectorCommandOutput> {
    return deserializeAws_restJson1BackTestAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
