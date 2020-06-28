import {
  MediaConvertClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaConvertClient.ts";
import { ListPresetsRequest, ListPresetsResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListPresetsCommand,
  serializeAws_restJson1ListPresetsCommand
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

export type ListPresetsCommandInput = ListPresetsRequest;
export type ListPresetsCommandOutput = ListPresetsResponse & __MetadataBearer;

export class ListPresetsCommand extends $Command<
  ListPresetsCommandInput,
  ListPresetsCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPresetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPresetsCommandInput, ListPresetsCommandOutput> {
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
    input: ListPresetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPresetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPresetsCommandOutput> {
    return deserializeAws_restJson1ListPresetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
