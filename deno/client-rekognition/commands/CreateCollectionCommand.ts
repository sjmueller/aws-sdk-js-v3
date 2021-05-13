import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { CreateCollectionRequest, CreateCollectionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateCollectionCommand,
  serializeAws_json1_1CreateCollectionCommand,
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

export interface CreateCollectionCommandInput extends CreateCollectionRequest {}
export interface CreateCollectionCommandOutput extends CreateCollectionResponse, __MetadataBearer {}

/**
 * <p>Creates a collection in an AWS Region. You can add faces to the collection using the
 *         <a>IndexFaces</a> operation. </p>
 *          <p>For example, you might create collections, one for each of your application users. A
 *       user can then index faces using the <code>IndexFaces</code> operation and persist results in a
 *       specific collection. Then, a user can search the collection for faces in the user-specific
 *       container. </p>
 *          <p>When you create a collection, it is associated with the latest version of the face model version.</p>
 *          <note>
 *             <p>Collection names are case-sensitive.</p>
 *          </note>
 *
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:CreateCollection</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateCollectionCommand } from "../../client-rekognition/mod.ts";
 * // const { RekognitionClient, CreateCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new CreateCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCollectionCommandInput} for command's `input` shape.
 * @see {@link CreateCollectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateCollectionCommand extends $Command<
  CreateCollectionCommandInput,
  CreateCollectionCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCollectionCommandInput) {
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
  ): Handler<CreateCollectionCommandInput, CreateCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CreateCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCollectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCollectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCollectionCommandOutput> {
    return deserializeAws_json1_1CreateCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
