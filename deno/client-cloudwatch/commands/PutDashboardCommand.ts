import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudWatchClient.ts";
import { PutDashboardInput, PutDashboardOutput } from "../models/index.ts";
import {
  deserializeAws_queryPutDashboardCommand,
  serializeAws_queryPutDashboardCommand
} from "../protocols/Aws_query.ts";
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

export type PutDashboardCommandInput = PutDashboardInput;
export type PutDashboardCommandOutput = PutDashboardOutput & __MetadataBearer;

export class PutDashboardCommand extends $Command<
  PutDashboardCommandInput,
  PutDashboardCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDashboardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDashboardCommandInput, PutDashboardCommandOutput> {
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
    input: PutDashboardCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPutDashboardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDashboardCommandOutput> {
    return deserializeAws_queryPutDashboardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
