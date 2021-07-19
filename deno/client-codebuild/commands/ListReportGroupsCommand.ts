import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient.ts";
import { ListReportGroupsInput, ListReportGroupsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListReportGroupsCommand,
  serializeAws_json1_1ListReportGroupsCommand,
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

export interface ListReportGroupsCommandInput extends ListReportGroupsInput {}
export interface ListReportGroupsCommandOutput extends ListReportGroupsOutput, __MetadataBearer {}

/**
 * <p>
 *       Gets a list ARNs for the report groups in the current Amazon Web Services account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportGroupsCommand } from "../../client-codebuild/mod.ts";
 * // const { CodeBuildClient, ListReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListReportGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReportGroupsCommand extends $Command<
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReportGroupsCommandInput) {
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
  ): Handler<ListReportGroupsCommandInput, ListReportGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListReportGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReportGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListReportGroupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReportGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReportGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReportGroupsCommandOutput> {
    return deserializeAws_json1_1ListReportGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
