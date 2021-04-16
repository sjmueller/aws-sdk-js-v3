import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { ListBuiltInSlotTypesRequest, ListBuiltInSlotTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListBuiltInSlotTypesCommand,
  serializeAws_restJson1ListBuiltInSlotTypesCommand,
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

export type ListBuiltInSlotTypesCommandInput = ListBuiltInSlotTypesRequest;
export type ListBuiltInSlotTypesCommandOutput = ListBuiltInSlotTypesResponse & __MetadataBearer;

/**
 * <p>Gets a list of built-in slot types that meet the specified
 *          criteria.</p>
 */
export class ListBuiltInSlotTypesCommand extends $Command<
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBuiltInSlotTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBuiltInSlotTypesCommandInput, ListBuiltInSlotTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListBuiltInSlotTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBuiltInSlotTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBuiltInSlotTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBuiltInSlotTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBuiltInSlotTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBuiltInSlotTypesCommandOutput> {
    return deserializeAws_restJson1ListBuiltInSlotTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
