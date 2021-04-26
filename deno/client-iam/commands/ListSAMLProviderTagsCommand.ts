import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListSAMLProviderTagsRequest, ListSAMLProviderTagsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListSAMLProviderTagsCommand,
  serializeAws_queryListSAMLProviderTagsCommand,
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

export interface ListSAMLProviderTagsCommandInput extends ListSAMLProviderTagsRequest {}
export interface ListSAMLProviderTagsCommandOutput extends ListSAMLProviderTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified Security Assertion Markup Language
 *       (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 */
export class ListSAMLProviderTagsCommand extends $Command<
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSAMLProviderTagsCommandInput) {
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
  ): Handler<ListSAMLProviderTagsCommandInput, ListSAMLProviderTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListSAMLProviderTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSAMLProviderTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSAMLProviderTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSAMLProviderTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSAMLProviderTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSAMLProviderTagsCommandOutput> {
    return deserializeAws_queryListSAMLProviderTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
