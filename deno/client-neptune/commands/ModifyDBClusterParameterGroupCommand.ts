import {
  NeptuneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NeptuneClient.ts";
import {
  DBClusterParameterGroupNameMessage,
  ModifyDBClusterParameterGroupMessage
} from "../models/index.ts";
import {
  deserializeAws_queryModifyDBClusterParameterGroupCommand,
  serializeAws_queryModifyDBClusterParameterGroupCommand
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

export type ModifyDBClusterParameterGroupCommandInput = ModifyDBClusterParameterGroupMessage;
export type ModifyDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage &
  __MetadataBearer;

export class ModifyDBClusterParameterGroupCommand extends $Command<
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyDBClusterParameterGroupCommandInput,
    ModifyDBClusterParameterGroupCommandOutput
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
    input: ModifyDBClusterParameterGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterParameterGroupCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryModifyDBClusterParameterGroupCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
