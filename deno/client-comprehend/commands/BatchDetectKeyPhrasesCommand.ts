import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { BatchDetectKeyPhrasesRequest, BatchDetectKeyPhrasesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchDetectKeyPhrasesCommand,
  serializeAws_json1_1BatchDetectKeyPhrasesCommand,
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

export interface BatchDetectKeyPhrasesCommandInput extends BatchDetectKeyPhrasesRequest {}
export interface BatchDetectKeyPhrasesCommandOutput extends BatchDetectKeyPhrasesResponse, __MetadataBearer {}

/**
 * <p>Detects the key noun phrases found in a batch of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectKeyPhrasesCommand } from "../../client-comprehend/mod.ts";
 * // const { ComprehendClient, BatchDetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectKeyPhrasesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDetectKeyPhrasesCommand extends $Command<
  BatchDetectKeyPhrasesCommandInput,
  BatchDetectKeyPhrasesCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDetectKeyPhrasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDetectKeyPhrasesCommandInput, BatchDetectKeyPhrasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectKeyPhrasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectKeyPhrasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectKeyPhrasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDetectKeyPhrasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDetectKeyPhrasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDetectKeyPhrasesCommandOutput> {
    return deserializeAws_json1_1BatchDetectKeyPhrasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
