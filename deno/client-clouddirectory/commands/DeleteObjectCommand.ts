import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { DeleteObjectRequest, DeleteObjectResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteObjectCommand,
  serializeAws_restJson1DeleteObjectCommand,
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

export interface DeleteObjectCommandInput extends DeleteObjectRequest {}
export interface DeleteObjectCommandOutput extends DeleteObjectResponse, __MetadataBearer {}

/**
 * <p>Deletes an object and its associated attributes. Only objects with no children and no
 *       parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DeleteObjectCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, DeleteObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DeleteObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteObjectCommand extends $Command<
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "DeleteObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectCommandOutput> {
    return deserializeAws_restJson1DeleteObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
