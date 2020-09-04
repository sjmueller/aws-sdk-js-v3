import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import {
  ListWebsiteAuthorizationProvidersRequest,
  ListWebsiteAuthorizationProvidersResponse,
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand,
  serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand,
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

export type ListWebsiteAuthorizationProvidersCommandInput = ListWebsiteAuthorizationProvidersRequest;
export type ListWebsiteAuthorizationProvidersCommandOutput = ListWebsiteAuthorizationProvidersResponse &
  __MetadataBearer;

export class ListWebsiteAuthorizationProvidersCommand extends $Command<
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWebsiteAuthorizationProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListWebsiteAuthorizationProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWebsiteAuthorizationProvidersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWebsiteAuthorizationProvidersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWebsiteAuthorizationProvidersCommandOutput> {
    return deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
