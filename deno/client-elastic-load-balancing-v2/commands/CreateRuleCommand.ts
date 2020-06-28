import {
  ElasticLoadBalancingv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticLoadBalancingv2Client.ts";
import { CreateRuleInput, CreateRuleOutput } from "../models/index.ts";
import {
  deserializeAws_queryCreateRuleCommand,
  serializeAws_queryCreateRuleCommand
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

export type CreateRuleCommandInput = CreateRuleInput;
export type CreateRuleCommandOutput = CreateRuleOutput & __MetadataBearer;

export class CreateRuleCommand extends $Command<
  CreateRuleCommandInput,
  CreateRuleCommandOutput,
  ElasticLoadBalancingv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRuleCommandInput, CreateRuleCommandOutput> {
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
    input: CreateRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRuleCommandOutput> {
    return deserializeAws_queryCreateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
