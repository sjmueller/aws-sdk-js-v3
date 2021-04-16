import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { GenerateCredentialReportResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryGenerateCredentialReportCommand,
  serializeAws_queryGenerateCredentialReportCommand,
} from "../protocols/Aws_query.ts";
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

export type GenerateCredentialReportCommandInput = {};
export type GenerateCredentialReportCommandOutput = GenerateCredentialReportResponse & __MetadataBearer;

/**
 * <p> Generates a credential report for the AWS account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 */
export class GenerateCredentialReportCommand extends $Command<
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateCredentialReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GenerateCredentialReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GenerateCredentialReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateCredentialReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGenerateCredentialReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateCredentialReportCommandOutput> {
    return deserializeAws_queryGenerateCredentialReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
