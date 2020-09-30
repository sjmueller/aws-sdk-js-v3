
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetContactReachabilityStatusCommand,
  serializeAws_json1_1GetContactReachabilityStatusCommand,
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

export type GetContactReachabilityStatusCommandInput = GetContactReachabilityStatusRequest;
export type GetContactReachabilityStatusCommandOutput = GetContactReachabilityStatusResponse & __MetadataBearer;

export class GetContactReachabilityStatusCommand extends $Command<
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContactReachabilityStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetContactReachabilityStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContactReachabilityStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContactReachabilityStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContactReachabilityStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContactReachabilityStatusCommandOutput> {
    return deserializeAws_json1_1GetContactReachabilityStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
