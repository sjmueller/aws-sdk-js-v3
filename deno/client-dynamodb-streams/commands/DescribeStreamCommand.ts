import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient.ts";
import { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeStreamCommand,
  serializeAws_json1_0DescribeStreamCommand,
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

export interface DescribeStreamCommandInput extends DescribeStreamInput {}
export interface DescribeStreamCommandOutput extends DescribeStreamOutput, __MetadataBearer {}

/**
 * <p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p>
 *          <note>
 *             <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p>
 *          </note>
 *          <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the
 *         <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no
 *         <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream
 *       records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code>
 *       are present, then that shard is closed and can no longer receive more data.</p>
 */
export class DescribeStreamCommand extends $Command<
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
  DynamoDBStreamsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBStreamsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStreamCommandInput, DescribeStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "DescribeStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamCommandOutput> {
    return deserializeAws_json1_0DescribeStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
