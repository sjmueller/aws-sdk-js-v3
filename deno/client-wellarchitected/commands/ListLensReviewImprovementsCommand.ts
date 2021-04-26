import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient.ts";
import { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListLensReviewImprovementsCommand,
  serializeAws_restJson1ListLensReviewImprovementsCommand,
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

export interface ListLensReviewImprovementsCommandInput extends ListLensReviewImprovementsInput {}
export interface ListLensReviewImprovementsCommandOutput extends ListLensReviewImprovementsOutput, __MetadataBearer {}

/**
 * <p>List lens review improvements.</p>
 */
export class ListLensReviewImprovementsCommand extends $Command<
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLensReviewImprovementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListLensReviewImprovementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLensReviewImprovementsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListLensReviewImprovementsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLensReviewImprovementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLensReviewImprovementsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLensReviewImprovementsCommandOutput> {
    return deserializeAws_restJson1ListLensReviewImprovementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
