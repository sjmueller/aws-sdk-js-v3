import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53Client.ts";
import {
  UpdateHealthCheckRequest,
  UpdateHealthCheckResponse
} from "../models/index.ts";
import {
  deserializeAws_restXmlUpdateHealthCheckCommand,
  serializeAws_restXmlUpdateHealthCheckCommand
} from "../protocols/Aws_restXml.ts";
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

export type UpdateHealthCheckCommandInput = UpdateHealthCheckRequest;
export type UpdateHealthCheckCommandOutput = UpdateHealthCheckResponse &
  __MetadataBearer;

export class UpdateHealthCheckCommand extends $Command<
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHealthCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput> {
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
    input: UpdateHealthCheckCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateHealthCheckCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateHealthCheckCommandOutput> {
    return deserializeAws_restXmlUpdateHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
