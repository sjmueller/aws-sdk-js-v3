import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient.ts";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DisableKinesisStreamingDestinationCommand,
  serializeAws_json1_0DisableKinesisStreamingDestinationCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DisableKinesisStreamingDestinationCommandInput extends KinesisStreamingDestinationInput {}
export interface DisableKinesisStreamingDestinationCommandOutput
  extends KinesisStreamingDestinationOutput,
    __MetadataBearer {}

/**
 * <p>Stops replication from the DynamoDB table to the Kinesis data stream. This is done
 *             without deleting either of the resources.</p>
 */
export class DisableKinesisStreamingDestinationCommand extends $Command<
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableKinesisStreamingDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DisableKinesisStreamingDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: KinesisStreamingDestinationInput.filterSensitiveLog,
      outputFilterSensitiveLog: KinesisStreamingDestinationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableKinesisStreamingDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DisableKinesisStreamingDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableKinesisStreamingDestinationCommandOutput> {
    return deserializeAws_json1_0DisableKinesisStreamingDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
