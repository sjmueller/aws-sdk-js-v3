import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { ListDashboardsInput, ListDashboardsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryListDashboardsCommand,
  serializeAws_queryListDashboardsCommand,
} from "../protocols/Aws_query.ts";
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

export type ListDashboardsCommandInput = ListDashboardsInput;
export type ListDashboardsCommandOutput = ListDashboardsOutput & __MetadataBearer;

/**
 * <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only
 * 			those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are
 * 			listed.
 * 	    </p>
 * 		       <p>
 *             <code>ListDashboards</code> returns up to 1000 results on one page. If there
 * 			are more than 1000 dashboards, you can call <code>ListDashboards</code> again and
 * 		include the value you received for <code>NextToken</code> in the first call, to receive
 * 		the next 1000 results.</p>
 */
export class ListDashboardsCommand extends $Command<
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDashboardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDashboardsCommandInput, ListDashboardsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "ListDashboardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDashboardsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDashboardsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDashboardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListDashboardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDashboardsCommandOutput> {
    return deserializeAws_queryListDashboardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
