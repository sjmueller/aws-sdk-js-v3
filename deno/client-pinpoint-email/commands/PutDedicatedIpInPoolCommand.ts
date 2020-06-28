import {
  PinpointEmailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointEmailClient.ts";
import {
  PutDedicatedIpInPoolRequest,
  PutDedicatedIpInPoolResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1PutDedicatedIpInPoolCommand,
  serializeAws_restJson1PutDedicatedIpInPoolCommand
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

export type PutDedicatedIpInPoolCommandInput = PutDedicatedIpInPoolRequest;
export type PutDedicatedIpInPoolCommandOutput = PutDedicatedIpInPoolResponse &
  __MetadataBearer;

export class PutDedicatedIpInPoolCommand extends $Command<
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDedicatedIpInPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutDedicatedIpInPoolCommandInput,
    PutDedicatedIpInPoolCommandOutput
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
    input: PutDedicatedIpInPoolCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDedicatedIpInPoolCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDedicatedIpInPoolCommandOutput> {
    return deserializeAws_restJson1PutDedicatedIpInPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
