import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { GetCheckerIpRangesRequest, GetCheckerIpRangesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetCheckerIpRangesCommand,
  serializeAws_restXmlGetCheckerIpRangesCommand,
} from "../protocols/Aws_restXml.ts";
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

export type GetCheckerIpRangesCommandInput = GetCheckerIpRangesRequest;
export type GetCheckerIpRangesCommandOutput = GetCheckerIpRangesResponse & __MetadataBearer;

/**
 * <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
 * 	        <important>
 * 			         <p>
 *                <code>GetCheckerIpRanges</code> still works, but we recommend that you download
 * 			ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 */
export class GetCheckerIpRangesCommand extends $Command<
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCheckerIpRangesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetCheckerIpRangesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCheckerIpRangesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCheckerIpRangesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCheckerIpRangesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetCheckerIpRangesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCheckerIpRangesCommandOutput> {
    return deserializeAws_restXmlGetCheckerIpRangesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
