import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetBucketBundlesRequest, GetBucketBundlesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetBucketBundlesCommand,
  serializeAws_json1_1GetBucketBundlesCommand,
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

export interface GetBucketBundlesCommandInput extends GetBucketBundlesRequest {}
export interface GetBucketBundlesCommandOutput extends GetBucketBundlesResult, __MetadataBearer {}

/**
 * <p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p>
 *
 *          <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a
 *       bucket.</p>
 *
 *          <p>Use the <a>UpdateBucketBundle</a> action to update the bundle for a
 *       bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketBundlesCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetBucketBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBucketBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketBundlesCommandInput} for command's `input` shape.
 * @see {@link GetBucketBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBucketBundlesCommand extends $Command<
  GetBucketBundlesCommandInput,
  GetBucketBundlesCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketBundlesCommandInput) {
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
  ): Handler<GetBucketBundlesCommandInput, GetBucketBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBucketBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketBundlesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketBundlesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBucketBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketBundlesCommandOutput> {
    return deserializeAws_json1_1GetBucketBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
