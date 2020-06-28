import {
  GameLiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GameLiftClient.ts";
import {
  SearchGameSessionsInput,
  SearchGameSessionsOutput
} from "../models/index.ts";
import {
  deserializeAws_json1_1SearchGameSessionsCommand,
  serializeAws_json1_1SearchGameSessionsCommand
} from "../protocols/Aws_json1_1.ts";
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

export type SearchGameSessionsCommandInput = SearchGameSessionsInput;
export type SearchGameSessionsCommandOutput = SearchGameSessionsOutput &
  __MetadataBearer;

export class SearchGameSessionsCommand extends $Command<
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchGameSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput> {
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
    input: SearchGameSessionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchGameSessionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchGameSessionsCommandOutput> {
    return deserializeAws_json1_1SearchGameSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
