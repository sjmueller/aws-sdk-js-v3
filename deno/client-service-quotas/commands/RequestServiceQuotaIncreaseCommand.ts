
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient.ts";
import { RequestServiceQuotaIncreaseRequest, RequestServiceQuotaIncreaseResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1RequestServiceQuotaIncreaseCommand,
  serializeAws_json1_1RequestServiceQuotaIncreaseCommand,
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

export type RequestServiceQuotaIncreaseCommandInput = RequestServiceQuotaIncreaseRequest;
export type RequestServiceQuotaIncreaseCommandOutput = RequestServiceQuotaIncreaseResponse & __MetadataBearer;

export class RequestServiceQuotaIncreaseCommand extends $Command<
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestServiceQuotaIncreaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RequestServiceQuotaIncreaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestServiceQuotaIncreaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestServiceQuotaIncreaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RequestServiceQuotaIncreaseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RequestServiceQuotaIncreaseCommandOutput> {
    return deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
