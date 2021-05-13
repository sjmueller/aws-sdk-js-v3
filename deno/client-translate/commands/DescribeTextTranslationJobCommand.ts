import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient.ts";
import { DescribeTextTranslationJobRequest, DescribeTextTranslationJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTextTranslationJobCommand,
  serializeAws_json1_1DescribeTextTranslationJobCommand,
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

export interface DescribeTextTranslationJobCommandInput extends DescribeTextTranslationJobRequest {}
export interface DescribeTextTranslationJobCommandOutput extends DescribeTextTranslationJobResponse, __MetadataBearer {}

/**
 * <p>Gets the properties associated with an asycnhronous batch translation job including name,
 *       ID, status, source and target languages, input/output S3 buckets, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DescribeTextTranslationJobCommand } from "../../client-translate/mod.ts";
 * // const { TranslateClient, DescribeTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new DescribeTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTextTranslationJobCommand extends $Command<
  DescribeTextTranslationJobCommandInput,
  DescribeTextTranslationJobCommandOutput,
  TranslateClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTextTranslationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTextTranslationJobCommandInput, DescribeTextTranslationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "DescribeTextTranslationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTextTranslationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTextTranslationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTextTranslationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTextTranslationJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTextTranslationJobCommandOutput> {
    return deserializeAws_json1_1DescribeTextTranslationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
