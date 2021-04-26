import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { DescribeLanguageModelRequest, DescribeLanguageModelResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeLanguageModelCommand,
  serializeAws_json1_1DescribeLanguageModelCommand,
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

export interface DescribeLanguageModelCommandInput extends DescribeLanguageModelRequest {}
export interface DescribeLanguageModelCommandOutput extends DescribeLanguageModelResponse, __MetadataBearer {}

/**
 * <p>Gets information about a single custom language model. Use this information to see
 *             details about the language model in your AWS account. You can also see whether the base
 *             language model used to create your custom language model has been updated. If Amazon Transcribe has
 *             updated the base model, you can create a new custom language model using the updated
 *             base model. If the language model wasn't created, you can use this operation to
 *             understand why Amazon Transcribe couldn't create it. </p>
 */
export class DescribeLanguageModelCommand extends $Command<
  DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLanguageModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLanguageModelCommandInput, DescribeLanguageModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "DescribeLanguageModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLanguageModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLanguageModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLanguageModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLanguageModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLanguageModelCommandOutput> {
    return deserializeAws_json1_1DescribeLanguageModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
