import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListServerCertificateTagsRequest, ListServerCertificateTagsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListServerCertificateTagsCommand,
  serializeAws_queryListServerCertificateTagsCommand,
} from "../protocols/Aws_query.ts";
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

export type ListServerCertificateTagsCommandInput = ListServerCertificateTagsRequest;
export type ListServerCertificateTagsCommandOutput = ListServerCertificateTagsResponse & __MetadataBearer;

/**
 * <p>Lists the tags that are attached to the specified IAM server certificate. The
 *       returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>For certificates in a Region supported by AWS Certificate Manager (ACM), we
 *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 *         manage, and deploy your server certificates. For more information about IAM server
 *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
 *           certificates</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 */
export class ListServerCertificateTagsCommand extends $Command<
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServerCertificateTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListServerCertificateTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServerCertificateTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServerCertificateTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServerCertificateTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListServerCertificateTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServerCertificateTagsCommandOutput> {
    return deserializeAws_queryListServerCertificateTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
