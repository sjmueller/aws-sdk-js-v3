import {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53DomainsClient.ts";
import {
  UpdateDomainNameserversRequest,
  UpdateDomainNameserversResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateDomainNameserversCommand,
  serializeAws_json1_1UpdateDomainNameserversCommand
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

export type UpdateDomainNameserversCommandInput = UpdateDomainNameserversRequest;
export type UpdateDomainNameserversCommandOutput = UpdateDomainNameserversResponse &
  __MetadataBearer;

export class UpdateDomainNameserversCommand extends $Command<
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainNameserversCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateDomainNameserversCommandInput,
    UpdateDomainNameserversCommandOutput
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
    input: UpdateDomainNameserversCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDomainNameserversCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDomainNameserversCommandOutput> {
    return deserializeAws_json1_1UpdateDomainNameserversCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
