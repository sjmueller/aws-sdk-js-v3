
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { ResendContactReachabilityEmailRequest, ResendContactReachabilityEmailResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ResendContactReachabilityEmailCommand,
  serializeAws_json1_1ResendContactReachabilityEmailCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type ResendContactReachabilityEmailCommandInput = ResendContactReachabilityEmailRequest;
export type ResendContactReachabilityEmailCommandOutput = ResendContactReachabilityEmailResponse & __MetadataBearer;

export class ResendContactReachabilityEmailCommand extends $Command<
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResendContactReachabilityEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ResendContactReachabilityEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResendContactReachabilityEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ResendContactReachabilityEmailCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendContactReachabilityEmailCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResendContactReachabilityEmailCommandOutput> {
    return deserializeAws_json1_1ResendContactReachabilityEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
