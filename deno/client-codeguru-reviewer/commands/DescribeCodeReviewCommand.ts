import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient.ts";
import { DescribeCodeReviewRequest, DescribeCodeReviewResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeCodeReviewCommand,
  serializeAws_restJson1DescribeCodeReviewCommand,
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

export interface DescribeCodeReviewCommandInput extends DescribeCodeReviewRequest {}
export interface DescribeCodeReviewCommandOutput extends DescribeCodeReviewResponse, __MetadataBearer {}

/**
 * <p> Returns the metadata associated with the code review along with its status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeCodeReviewCommand } from "../../client-codeguru-reviewer/mod.ts";
 * // const { CodeGuruReviewerClient, DescribeCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeCodeReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeReviewCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCodeReviewCommand extends $Command<
  DescribeCodeReviewCommandInput,
  DescribeCodeReviewCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCodeReviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "DescribeCodeReviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCodeReviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCodeReviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCodeReviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCodeReviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCodeReviewCommandOutput> {
    return deserializeAws_restJson1DescribeCodeReviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
