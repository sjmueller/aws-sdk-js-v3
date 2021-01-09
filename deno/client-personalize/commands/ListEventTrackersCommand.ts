import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { ListEventTrackersRequest, ListEventTrackersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListEventTrackersCommand,
  serializeAws_json1_1ListEventTrackersCommand,
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

export type ListEventTrackersCommandInput = ListEventTrackersRequest;
export type ListEventTrackersCommandOutput = ListEventTrackersResponse & __MetadataBearer;

/**
 * <p>Returns the list of event trackers associated with the account.
 *       The response provides the properties for each event tracker, including the Amazon Resource
 *       Name (ARN) and tracking ID. For more
 *       information on event trackers, see <a>CreateEventTracker</a>.</p>
 */
export class ListEventTrackersCommand extends $Command<
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput,
  PersonalizeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventTrackersCommandInput) {
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
  ): Handler<ListEventTrackersCommandInput, ListEventTrackersCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListEventTrackersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventTrackersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventTrackersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventTrackersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEventTrackersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventTrackersCommandOutput> {
    return deserializeAws_json1_1ListEventTrackersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
