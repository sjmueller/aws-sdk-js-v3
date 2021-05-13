import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { DeleteDashboardsInput, DeleteDashboardsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteDashboardsCommand,
  serializeAws_queryDeleteDashboardsCommand,
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

export interface DeleteDashboardsCommandInput extends DeleteDashboardsInput {}
export interface DeleteDashboardsCommandOutput extends DeleteDashboardsOutput, __MetadataBearer {}

/**
 * <p>Deletes all dashboards that you specify. You
 * 			can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are
 * 			deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteDashboardsCommand } from "../../client-cloudwatch/mod.ts";
 * // const { CloudWatchClient, DeleteDashboardsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDashboardsCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDashboardsCommand extends $Command<
  DeleteDashboardsCommandInput,
  DeleteDashboardsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDashboardsCommandInput) {
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
  ): Handler<DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteDashboardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDashboardsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDashboardsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDashboardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDashboardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDashboardsCommandOutput> {
    return deserializeAws_queryDeleteDashboardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
