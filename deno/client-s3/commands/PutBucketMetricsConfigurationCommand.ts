import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.ts";
import { PutBucketMetricsConfigurationRequest } from "../models/models_0.ts";
import {
  deserializeAws_restXmlPutBucketMetricsConfigurationCommand,
  serializeAws_restXmlPutBucketMetricsConfigurationCommand,
} from "../protocols/Aws_restXml.ts";
import { getBucketEndpointPlugin } from "../../middleware-bucket-endpoint/mod.ts";
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

export interface PutBucketMetricsConfigurationCommandInput extends PutBucketMetricsConfigurationRequest {}
export interface PutBucketMetricsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.
 *          You can have up to 1,000 metrics configurations per bucket. If you're updating an existing
 *          metrics configuration, note that this is a full replacement of the existing metrics
 *          configuration. If you don't include the elements you want to keep, they are erased.</p>
 *
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutMetricsConfiguration</code> action. The bucket owner has this permission by
 *          default. The bucket owner can grant this permission to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *
 *          <p>For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon
 *             CloudWatch</a>.</p>
 *
 *          <p>The following operations are related to
 *          <code>PutBucketMetricsConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html">DeleteBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html">ListBucketMetricsConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <code>GetBucketLifecycle</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>TooManyConfigurations</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: You are attempting to create a new configuration but have
 *                      already reached the 1,000-configuration limit.</p>
 *                   </li>
 *                   <li>
 *                      <p>HTTP Status Code: HTTP 400 Bad Request</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketMetricsConfigurationCommand } from "../../client-s3/mod.ts";
 * // const { S3Client, PutBucketMetricsConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketMetricsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutBucketMetricsConfigurationCommand extends $Command<
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBucketMetricsConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketMetricsConfigurationCommandInput, PutBucketMetricsConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketMetricsConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketMetricsConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBucketMetricsConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketMetricsConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBucketMetricsConfigurationCommandOutput> {
    return deserializeAws_restXmlPutBucketMetricsConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
