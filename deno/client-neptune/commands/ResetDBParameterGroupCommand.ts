import {
  NeptuneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NeptuneClient.ts";
import {
  DBParameterGroupNameMessage,
  ResetDBParameterGroupMessage
} from "../models/index.ts";
import {
  deserializeAws_queryResetDBParameterGroupCommand,
  serializeAws_queryResetDBParameterGroupCommand
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

export type ResetDBParameterGroupCommandInput = ResetDBParameterGroupMessage;
export type ResetDBParameterGroupCommandOutput = DBParameterGroupNameMessage &
  __MetadataBearer;

export class ResetDBParameterGroupCommand extends $Command<
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetDBParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ResetDBParameterGroupCommandInput,
    ResetDBParameterGroupCommandOutput
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
    input: ResetDBParameterGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryResetDBParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetDBParameterGroupCommandOutput> {
    return deserializeAws_queryResetDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
