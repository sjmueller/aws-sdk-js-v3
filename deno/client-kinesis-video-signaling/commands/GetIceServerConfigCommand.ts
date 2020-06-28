import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisVideoSignalingClient.ts";
import {
  GetIceServerConfigRequest,
  GetIceServerConfigResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetIceServerConfigCommand,
  serializeAws_restJson1GetIceServerConfigCommand
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

export type GetIceServerConfigCommandInput = GetIceServerConfigRequest;
export type GetIceServerConfigCommandOutput = GetIceServerConfigResponse &
  __MetadataBearer;

export class GetIceServerConfigCommand extends $Command<
  GetIceServerConfigCommandInput,
  GetIceServerConfigCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIceServerConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput> {
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
    input: GetIceServerConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIceServerConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIceServerConfigCommandOutput> {
    return deserializeAws_restJson1GetIceServerConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
