import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient.ts";
import { DeleteFileSystemRequest, DeleteFileSystemResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteFileSystemCommand,
  serializeAws_json1_1DeleteFileSystemCommand,
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

export interface DeleteFileSystemCommandInput extends DeleteFileSystemRequest {}
export interface DeleteFileSystemCommandOutput extends DeleteFileSystemResponse, __MetadataBearer {}

/**
 * <p>Deletes a file system, deleting its contents. After deletion, the file system no
 *             longer exists, and its data is gone. Any existing automatic backups will also be
 *             deleted.</p>
 *         <p>By default, when you delete an Amazon FSx for Windows File Server file system, a
 *             final backup is created upon deletion. This final backup is not subject to the file
 *             system's retention policy, and must be manually deleted.</p>
 *
 *
 *         <p>The <code>DeleteFileSystem</code> action returns while the file system has the
 *                 <code>DELETING</code> status. You can check the file system deletion status by
 *             calling the <a>DescribeFileSystems</a> action, which returns a list of file
 *             systems in your account. If you pass the file system ID for a deleted file system, the
 *                 <a>DescribeFileSystems</a> returns a <code>FileSystemNotFound</code>
 *             error.</p>
 *         <note>
 *             <p>Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if
 *             a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code>
 *             state.</p>
 *          </note>
 *         <important>
 *             <p>The data in a deleted file system is also deleted and can't be recovered by
 *                 any means.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileSystemCommand } from "../../client-fsx/mod.ts";
 * // const { FSxClient, DeleteFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileSystemCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteFileSystemCommand extends $Command<
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFileSystemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFileSystemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemCommandOutput> {
    return deserializeAws_json1_1DeleteFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
