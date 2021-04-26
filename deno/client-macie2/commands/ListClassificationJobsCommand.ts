import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import { ListClassificationJobsRequest, ListClassificationJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListClassificationJobsCommand,
  serializeAws_restJson1ListClassificationJobsCommand,
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

export interface ListClassificationJobsCommandInput extends ListClassificationJobsRequest {}
export interface ListClassificationJobsCommandOutput extends ListClassificationJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about one or more classification jobs.</p>
 */
export class ListClassificationJobsCommand extends $Command<
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClassificationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClassificationJobsCommandInput, ListClassificationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "ListClassificationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClassificationJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListClassificationJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClassificationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClassificationJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClassificationJobsCommandOutput> {
    return deserializeAws_restJson1ListClassificationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
