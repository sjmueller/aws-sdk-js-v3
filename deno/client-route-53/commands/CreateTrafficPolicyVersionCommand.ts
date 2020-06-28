import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53Client.ts";
import {
  CreateTrafficPolicyVersionRequest,
  CreateTrafficPolicyVersionResponse
} from "../models/index.ts";
import {
  deserializeAws_restXmlCreateTrafficPolicyVersionCommand,
  serializeAws_restXmlCreateTrafficPolicyVersionCommand
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export type CreateTrafficPolicyVersionCommandInput = CreateTrafficPolicyVersionRequest;
export type CreateTrafficPolicyVersionCommandOutput = CreateTrafficPolicyVersionResponse &
  __MetadataBearer;

export class CreateTrafficPolicyVersionCommand extends $Command<
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrafficPolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateTrafficPolicyVersionCommandInput,
    CreateTrafficPolicyVersionCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

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
    input: CreateTrafficPolicyVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateTrafficPolicyVersionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficPolicyVersionCommandOutput> {
    return deserializeAws_restXmlCreateTrafficPolicyVersionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
