import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { GetTemplateSummaryInput, GetTemplateSummaryOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryGetTemplateSummaryCommand,
  serializeAws_queryGetTemplateSummaryCommand,
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

export type GetTemplateSummaryCommandInput = GetTemplateSummaryInput;
export type GetTemplateSummaryCommandOutput = GetTemplateSummaryOutput & __MetadataBearer;

/**
 * <p>Returns information about a new or existing template. The
 *             <code>GetTemplateSummary</code> action is useful for viewing parameter information, such
 *          as default parameter values and parameter types, before you create or update a stack or
 *          stack set.</p>
 *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or
 *          you can get template information for a stack set, or a running or deleted stack.</p>
 *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information
 *          for up to 90 days after the stack has been deleted. If the template does not exist, a
 *             <code>ValidationError</code> is returned.</p>
 */
export class GetTemplateSummaryCommand extends $Command<
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput,
  CloudFormationClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTemplateSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "GetTemplateSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTemplateSummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateSummaryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTemplateSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetTemplateSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateSummaryCommandOutput> {
    return deserializeAws_queryGetTemplateSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
