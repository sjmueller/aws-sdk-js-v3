import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetDistributionLatestCacheResetRequest, GetDistributionLatestCacheResetResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDistributionLatestCacheResetCommand,
  serializeAws_json1_1GetDistributionLatestCacheResetCommand,
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

export interface GetDistributionLatestCacheResetCommandInput extends GetDistributionLatestCacheResetRequest {}
export interface GetDistributionLatestCacheResetCommandOutput
  extends GetDistributionLatestCacheResetResult,
    __MetadataBearer {}

/**
 * <p>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail
 *       content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionLatestCacheResetCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetDistributionLatestCacheResetCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionLatestCacheResetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionLatestCacheResetCommandInput} for command's `input` shape.
 * @see {@link GetDistributionLatestCacheResetCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDistributionLatestCacheResetCommand extends $Command<
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionLatestCacheResetCommandInput) {
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
  ): Handler<GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDistributionLatestCacheResetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionLatestCacheResetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionLatestCacheResetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDistributionLatestCacheResetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDistributionLatestCacheResetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDistributionLatestCacheResetCommandOutput> {
    return deserializeAws_json1_1GetDistributionLatestCacheResetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
