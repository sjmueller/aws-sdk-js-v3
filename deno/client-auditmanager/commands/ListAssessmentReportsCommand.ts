import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { ListAssessmentReportsRequest, ListAssessmentReportsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAssessmentReportsCommand,
  serializeAws_restJson1ListAssessmentReportsCommand,
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

export interface ListAssessmentReportsCommandInput extends ListAssessmentReportsRequest {}
export interface ListAssessmentReportsCommandOutput extends ListAssessmentReportsResponse, __MetadataBearer {}

/**
 * <p>
 * Returns a list of assessment reports created in AWS Audit Manager.
 * </p>
 */
export class ListAssessmentReportsCommand extends $Command<
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssessmentReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentReportsCommandInput, ListAssessmentReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentReportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentReportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssessmentReportsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentReportsCommandOutput> {
    return deserializeAws_restJson1ListAssessmentReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
