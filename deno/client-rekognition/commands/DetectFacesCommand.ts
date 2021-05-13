import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { DetectFacesRequest, DetectFacesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DetectFacesCommand,
  serializeAws_json1_1DetectFacesCommand,
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

export interface DetectFacesCommandInput extends DetectFacesRequest {}
export interface DetectFacesCommandOutput extends DetectFacesResponse, __MetadataBearer {}

/**
 * <p>Detects faces within an image that is provided as input.</p>
 *
 *          <p>
 *             <code>DetectFaces</code> detects the 100 largest faces in the image. For each face
 *       detected, the operation returns face details. These details include a bounding box of the
 *       face, a confidence value (that the bounding box contains a face), and a fixed set of
 *       attributes such as facial landmarks (for example, coordinates of eye and mouth),
 *       presence of beard, sunglasses, and so on. </p>
 *          <p>The face-detection algorithm is most effective on frontal faces. For non-frontal or
 *       obscured faces, the algorithm might not detect the faces or might detect faces with lower
 *       confidence. </p>
 *          <p>You pass the input image either as base64-encoded image bytes or as a reference to an
 *       image in an Amazon S3 bucket. If you use the AWS CLI
 *        to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 *
 *          <note>
 *             <p>This is a stateless API operation. That is, the operation does not persist any
 *         data.</p>
 *          </note>
 *
 *          <p>This operation requires permissions to perform the
 *       <code>rekognition:DetectFaces</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectFacesCommand } from "../../client-rekognition/mod.ts";
 * // const { RekognitionClient, DetectFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DetectFacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectFacesCommandInput} for command's `input` shape.
 * @see {@link DetectFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetectFacesCommand extends $Command<
  DetectFacesCommandInput,
  DetectFacesCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectFacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectFacesCommandInput, DetectFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectFacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectFacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectFacesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectFacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectFacesCommandOutput> {
    return deserializeAws_json1_1DetectFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
