import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { GetDomainStatisticsReportRequest, GetDomainStatisticsReportResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDomainStatisticsReportCommand,
  serializeAws_restJson1GetDomainStatisticsReportCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetDomainStatisticsReportCommandInput extends GetDomainStatisticsReportRequest {}
export interface GetDomainStatisticsReportCommandOutput extends GetDomainStatisticsReportResponse, __MetadataBearer {}

/**
 * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
 *             email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDomainStatisticsReportCommand } from "../../client-sesv2/mod.ts";
 * // const { SESv2Client, GetDomainStatisticsReportCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDomainStatisticsReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainStatisticsReportCommandInput} for command's `input` shape.
 * @see {@link GetDomainStatisticsReportCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDomainStatisticsReportCommand extends $Command<
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDomainStatisticsReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainStatisticsReportCommandInput, GetDomainStatisticsReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetDomainStatisticsReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainStatisticsReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainStatisticsReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainStatisticsReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDomainStatisticsReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDomainStatisticsReportCommandOutput> {
    return deserializeAws_restJson1GetDomainStatisticsReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
