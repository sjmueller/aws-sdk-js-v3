import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { DeleteCommentContentInput, DeleteCommentContentOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteCommentContentCommand,
  serializeAws_json1_1DeleteCommentContentCommand,
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

export interface DeleteCommentContentCommandInput extends DeleteCommentContentInput {}
export interface DeleteCommentContentCommandOutput extends DeleteCommentContentOutput, __MetadataBearer {}

/**
 * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteCommentContentCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, DeleteCommentContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteCommentContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCommentContentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCommentContentCommand extends $Command<
  DeleteCommentContentCommandInput,
  DeleteCommentContentCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCommentContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCommentContentCommandInput, DeleteCommentContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DeleteCommentContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCommentContentInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCommentContentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCommentContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCommentContentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCommentContentCommandOutput> {
    return deserializeAws_json1_1DeleteCommentContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
