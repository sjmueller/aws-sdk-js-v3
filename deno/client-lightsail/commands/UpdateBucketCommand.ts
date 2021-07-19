import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { UpdateBucketRequest, UpdateBucketResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateBucketCommand,
  serializeAws_json1_1UpdateBucketCommand,
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

export interface UpdateBucketCommandInput extends UpdateBucketRequest {}
export interface UpdateBucketCommandOutput extends UpdateBucketResult, __MetadataBearer {}

/**
 * <p>Updates an existing Amazon Lightsail bucket.</p>
 *
 *          <p>Use this action to update the configuration of an existing bucket, such as versioning,
 *       public accessibility, and the AWS accounts that can access the bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateBucketCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, UpdateBucketCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBucketCommandInput} for command's `input` shape.
 * @see {@link UpdateBucketCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateBucketCommand extends $Command<
  UpdateBucketCommandInput,
  UpdateBucketCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBucketCommandInput) {
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
  ): Handler<UpdateBucketCommandInput, UpdateBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBucketRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBucketResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBucketCommandOutput> {
    return deserializeAws_json1_1UpdateBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
