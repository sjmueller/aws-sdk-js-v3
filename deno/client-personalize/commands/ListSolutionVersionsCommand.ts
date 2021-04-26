import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { ListSolutionVersionsRequest, ListSolutionVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListSolutionVersionsCommand,
  serializeAws_json1_1ListSolutionVersionsCommand,
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

export interface ListSolutionVersionsCommandInput extends ListSolutionVersionsRequest {}
export interface ListSolutionVersionsCommandOutput extends ListSolutionVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of solution versions for the given solution. When a solution is not
 *       specified, all the solution versions associated with the account are listed. The response
 *       provides the properties for each solution version, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 */
export class ListSolutionVersionsCommand extends $Command<
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSolutionVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListSolutionVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSolutionVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSolutionVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSolutionVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSolutionVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolutionVersionsCommandOutput> {
    return deserializeAws_json1_1ListSolutionVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
