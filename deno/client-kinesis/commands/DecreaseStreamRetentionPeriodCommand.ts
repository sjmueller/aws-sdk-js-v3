import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { DecreaseStreamRetentionPeriodInput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand,
  serializeAws_json1_1DecreaseStreamRetentionPeriodCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface DecreaseStreamRetentionPeriodCommandInput extends DecreaseStreamRetentionPeriodInput {}
export interface DecreaseStreamRetentionPeriodCommandOutput extends __MetadataBearer {}

/**
 * <p>Decreases the Kinesis data stream's retention period, which is the length of time
 *             data records are accessible after they are added to the stream. The minimum value of a
 *             stream's retention period is 24 hours.</p>
 *         <p>This operation may result in lost data. For example, if the stream's retention
 *             period is 48 hours and is decreased to 24 hours, any data already in the stream that is
 *             older than 24 hours is inaccessible.</p>
 */
export class DecreaseStreamRetentionPeriodCommand extends $Command<
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecreaseStreamRetentionPeriodCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DecreaseStreamRetentionPeriodCommandInput, DecreaseStreamRetentionPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DecreaseStreamRetentionPeriodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseStreamRetentionPeriodInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecreaseStreamRetentionPeriodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DecreaseStreamRetentionPeriodCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecreaseStreamRetentionPeriodCommandOutput> {
    return deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
