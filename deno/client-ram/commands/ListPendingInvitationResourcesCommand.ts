import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient.ts";
import { ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPendingInvitationResourcesCommand,
  serializeAws_restJson1ListPendingInvitationResourcesCommand,
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

export interface ListPendingInvitationResourcesCommandInput extends ListPendingInvitationResourcesRequest {}
export interface ListPendingInvitationResourcesCommandOutput
  extends ListPendingInvitationResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resources in a resource share that is shared with you but that the invitation is still pending for.</p>
 */
export class ListPendingInvitationResourcesCommand extends $Command<
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPendingInvitationResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListPendingInvitationResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPendingInvitationResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPendingInvitationResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPendingInvitationResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPendingInvitationResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPendingInvitationResourcesCommandOutput> {
    return deserializeAws_restJson1ListPendingInvitationResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
