import {
  LakeFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LakeFormationClient.ts";
import {
  DeregisterResourceRequest,
  DeregisterResourceResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1DeregisterResourceCommand,
  serializeAws_json1_1DeregisterResourceCommand
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

export type DeregisterResourceCommandInput = DeregisterResourceRequest;
export type DeregisterResourceCommandOutput = DeregisterResourceResponse &
  __MetadataBearer;

export class DeregisterResourceCommand extends $Command<
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterResourceCommandInput, DeregisterResourceCommandOutput> {
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
    input: DeregisterResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterResourceCommandOutput> {
    return deserializeAws_json1_1DeregisterResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
