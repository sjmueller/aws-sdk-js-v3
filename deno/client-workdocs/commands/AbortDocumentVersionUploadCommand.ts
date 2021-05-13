import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient.ts";
import { AbortDocumentVersionUploadRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AbortDocumentVersionUploadCommand,
  serializeAws_restJson1AbortDocumentVersionUploadCommand,
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

export interface AbortDocumentVersionUploadCommandInput extends AbortDocumentVersionUploadRequest {}
export interface AbortDocumentVersionUploadCommandOutput extends __MetadataBearer {}

/**
 * <p>Aborts the upload of the specified document version that was previously initiated
 *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
 *             only when it no longer intends to upload the document version, or fails to do
 *             so.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "../../client-workdocs/mod.ts";
 * // const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AbortDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link AbortDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AbortDocumentVersionUploadCommand extends $Command<
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AbortDocumentVersionUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AbortDocumentVersionUploadCommandInput, AbortDocumentVersionUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "AbortDocumentVersionUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AbortDocumentVersionUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortDocumentVersionUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AbortDocumentVersionUploadCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AbortDocumentVersionUploadCommandOutput> {
    return deserializeAws_restJson1AbortDocumentVersionUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
