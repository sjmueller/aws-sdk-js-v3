import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetDistributionBundlesRequest, GetDistributionBundlesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDistributionBundlesCommand,
  serializeAws_json1_1GetDistributionBundlesCommand,
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

export interface GetDistributionBundlesCommandInput extends GetDistributionBundlesRequest {}
export interface GetDistributionBundlesCommandOutput extends GetDistributionBundlesResult, __MetadataBearer {}

/**
 * <p>Returns the list bundles that can be applied to you Amazon Lightsail content delivery
 *       network (CDN) distributions.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 */
export class GetDistributionBundlesCommand extends $Command<
  GetDistributionBundlesCommandInput,
  GetDistributionBundlesCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionBundlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDistributionBundlesCommandInput, GetDistributionBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDistributionBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionBundlesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionBundlesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDistributionBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDistributionBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDistributionBundlesCommandOutput> {
    return deserializeAws_json1_1GetDistributionBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
