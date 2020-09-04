import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient.ts";
import { RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand,
  serializeAws_json1_1RefreshTrustedAdvisorCheckCommand,
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

export type RefreshTrustedAdvisorCheckCommandInput = RefreshTrustedAdvisorCheckRequest;
export type RefreshTrustedAdvisorCheckCommandOutput = RefreshTrustedAdvisorCheckResponse & __MetadataBearer;

export class RefreshTrustedAdvisorCheckCommand extends $Command<
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RefreshTrustedAdvisorCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RefreshTrustedAdvisorCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RefreshTrustedAdvisorCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshTrustedAdvisorCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshTrustedAdvisorCheckCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput> {
    return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
