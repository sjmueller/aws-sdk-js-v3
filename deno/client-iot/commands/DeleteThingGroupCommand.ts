import {
  IoTClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTClient.ts";
import {
  DeleteThingGroupRequest,
  DeleteThingGroupResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteThingGroupCommand,
  serializeAws_restJson1DeleteThingGroupCommand
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

export type DeleteThingGroupCommandInput = DeleteThingGroupRequest;
export type DeleteThingGroupCommandOutput = DeleteThingGroupResponse &
  __MetadataBearer;

export class DeleteThingGroupCommand extends $Command<
  DeleteThingGroupCommandInput,
  DeleteThingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteThingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput> {
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
    input: DeleteThingGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThingGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteThingGroupCommandOutput> {
    return deserializeAws_restJson1DeleteThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
