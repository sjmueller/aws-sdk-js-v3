import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient.ts";
import { ListBuildBatchesForProjectInput, ListBuildBatchesForProjectOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListBuildBatchesForProjectCommand,
  serializeAws_json1_1ListBuildBatchesForProjectCommand,
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

export interface ListBuildBatchesForProjectCommandInput extends ListBuildBatchesForProjectInput {}
export interface ListBuildBatchesForProjectCommandOutput extends ListBuildBatchesForProjectOutput, __MetadataBearer {}

/**
 * <p>Retrieves the identifiers of the build batches for a specific project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesForProjectCommand } from "../../client-codebuild/mod.ts";
 * // const { CodeBuildClient, ListBuildBatchesForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildBatchesForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildBatchesForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBuildBatchesForProjectCommand extends $Command<
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBuildBatchesForProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBuildBatchesForProjectCommandInput, ListBuildBatchesForProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListBuildBatchesForProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBuildBatchesForProjectInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBuildBatchesForProjectOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBuildBatchesForProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBuildBatchesForProjectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBuildBatchesForProjectCommandOutput> {
    return deserializeAws_json1_1ListBuildBatchesForProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
