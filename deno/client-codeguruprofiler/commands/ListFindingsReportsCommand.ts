import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient.ts";
import { ListFindingsReportsRequest, ListFindingsReportsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListFindingsReportsCommand,
  serializeAws_restJson1ListFindingsReportsCommand,
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

export interface ListFindingsReportsCommandInput extends ListFindingsReportsRequest {}
export interface ListFindingsReportsCommandOutput extends ListFindingsReportsResponse, __MetadataBearer {}

/**
 * <p>List the available reports for a given profiling group and time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListFindingsReportsCommand } from "../../client-codeguruprofiler/mod.ts";
 * // const { CodeGuruProfilerClient, ListFindingsReportsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListFindingsReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsReportsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFindingsReportsCommand extends $Command<
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFindingsReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingsReportsCommandInput, ListFindingsReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "ListFindingsReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFindingsReportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFindingsReportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFindingsReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFindingsReportsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsReportsCommandOutput> {
    return deserializeAws_restJson1ListFindingsReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
