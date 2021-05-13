import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { AttachObjectRequest, AttachObjectResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AttachObjectCommand,
  serializeAws_restJson1AttachObjectCommand,
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

export interface AttachObjectCommandInput extends AttachObjectRequest {}
export interface AttachObjectCommandOutput extends AttachObjectResponse, __MetadataBearer {}

/**
 * <p>Attaches an existing object to another object. An object can be accessed in two
 *       ways:</p>
 *          <ol>
 *             <li>
 *                <p>Using the path</p>
 *             </li>
 *             <li>
 *                <p>Using <code>ObjectIdentifier</code>
 *                </p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachObjectCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, AttachObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AttachObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachObjectCommandInput} for command's `input` shape.
 * @see {@link AttachObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AttachObjectCommand extends $Command<
  AttachObjectCommandInput,
  AttachObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachObjectCommandInput) {
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
  ): Handler<AttachObjectCommandInput, AttachObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "AttachObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AttachObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachObjectCommandOutput> {
    return deserializeAws_restJson1AttachObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
