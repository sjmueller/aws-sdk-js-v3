import {
  MediaLiveClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaLiveClient.ts";
import {
  ListInputSecurityGroupsRequest,
  ListInputSecurityGroupsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListInputSecurityGroupsCommand,
  serializeAws_restJson1ListInputSecurityGroupsCommand
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type ListInputSecurityGroupsCommandInput = ListInputSecurityGroupsRequest;
export type ListInputSecurityGroupsCommandOutput = ListInputSecurityGroupsResponse &
  __MetadataBearer;

export class ListInputSecurityGroupsCommand extends $Command<
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInputSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListInputSecurityGroupsCommandInput,
    ListInputSecurityGroupsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListInputSecurityGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInputSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInputSecurityGroupsCommandOutput> {
    return deserializeAws_restJson1ListInputSecurityGroupsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
