import {
  IoTAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTAnalyticsClient.ts";
import { ListChannelsRequest, ListChannelsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListChannelsCommand,
  serializeAws_restJson1ListChannelsCommand
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

export type ListChannelsCommandInput = ListChannelsRequest;
export type ListChannelsCommandOutput = ListChannelsResponse & __MetadataBearer;

export class ListChannelsCommand extends $Command<
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelsCommandInput, ListChannelsCommandOutput> {
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
    input: ListChannelsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListChannelsCommandOutput> {
    return deserializeAws_restJson1ListChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
