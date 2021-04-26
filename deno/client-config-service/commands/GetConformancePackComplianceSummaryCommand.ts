import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import {
  GetConformancePackComplianceSummaryRequest,
  GetConformancePackComplianceSummaryResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetConformancePackComplianceSummaryCommand,
  serializeAws_json1_1GetConformancePackComplianceSummaryCommand,
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

export interface GetConformancePackComplianceSummaryCommandInput extends GetConformancePackComplianceSummaryRequest {}
export interface GetConformancePackComplianceSummaryCommandOutput
  extends GetConformancePackComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
 */
export class GetConformancePackComplianceSummaryCommand extends $Command<
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConformancePackComplianceSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetConformancePackComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConformancePackComplianceSummaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConformancePackComplianceSummaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConformancePackComplianceSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetConformancePackComplianceSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConformancePackComplianceSummaryCommandOutput> {
    return deserializeAws_json1_1GetConformancePackComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
