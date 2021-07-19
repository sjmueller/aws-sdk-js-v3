import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { CreateBucketAccessKeyRequest, CreateBucketAccessKeyResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateBucketAccessKeyCommand,
  serializeAws_json1_1CreateBucketAccessKeyCommand,
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

export interface CreateBucketAccessKeyCommandInput extends CreateBucketAccessKeyRequest {}
export interface CreateBucketAccessKeyCommandOutput extends CreateBucketAccessKeyResult, __MetadataBearer {}

/**
 * <p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of
 *       an access key ID and corresponding secret access key.</p>
 *
 *          <p>Access keys grant full programmatic access to the specified bucket and its objects. You
 *       can have a maximum of two access keys per bucket. Use the <a>GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information
 *       about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 *
 *          <important>
 *             <p>The <code>secretAccessKey</code> value is returned only in response to the
 *           <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you
 *         first create an access key; you cannot get the secret access key later. If you lose the
 *         secret access key, you must create a new access key.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateBucketAccessKeyCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, CreateBucketAccessKeyCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateBucketAccessKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBucketAccessKeyCommandInput} for command's `input` shape.
 * @see {@link CreateBucketAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateBucketAccessKeyCommand extends $Command<
  CreateBucketAccessKeyCommandInput,
  CreateBucketAccessKeyCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBucketAccessKeyCommandInput) {
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
  ): Handler<CreateBucketAccessKeyCommandInput, CreateBucketAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateBucketAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBucketAccessKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBucketAccessKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBucketAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBucketAccessKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBucketAccessKeyCommandOutput> {
    return deserializeAws_json1_1CreateBucketAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
