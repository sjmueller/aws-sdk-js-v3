import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ECSClient.ts";
import {
  UpdateServicePrimaryTaskSetRequest,
  UpdateServicePrimaryTaskSetResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand,
  serializeAws_json1_1UpdateServicePrimaryTaskSetCommand
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

export type UpdateServicePrimaryTaskSetCommandInput = UpdateServicePrimaryTaskSetRequest;
export type UpdateServicePrimaryTaskSetCommandOutput = UpdateServicePrimaryTaskSetResponse &
  __MetadataBearer;

export class UpdateServicePrimaryTaskSetCommand extends $Command<
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServicePrimaryTaskSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateServicePrimaryTaskSetCommandInput,
    UpdateServicePrimaryTaskSetCommandOutput
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
    input: UpdateServicePrimaryTaskSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServicePrimaryTaskSetCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServicePrimaryTaskSetCommandOutput> {
    return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
