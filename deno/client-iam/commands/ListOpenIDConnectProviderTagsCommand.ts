import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListOpenIDConnectProviderTagsRequest, ListOpenIDConnectProviderTagsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListOpenIDConnectProviderTagsCommand,
  serializeAws_queryListOpenIDConnectProviderTagsCommand,
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

export interface ListOpenIDConnectProviderTagsCommandInput extends ListOpenIDConnectProviderTagsRequest {}
export interface ListOpenIDConnectProviderTagsCommandOutput
  extends ListOpenIDConnectProviderTagsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible
 *       identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 */
export class ListOpenIDConnectProviderTagsCommand extends $Command<
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOpenIDConnectProviderTagsCommandInput) {
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
  ): Handler<ListOpenIDConnectProviderTagsCommandInput, ListOpenIDConnectProviderTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListOpenIDConnectProviderTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOpenIDConnectProviderTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOpenIDConnectProviderTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOpenIDConnectProviderTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListOpenIDConnectProviderTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOpenIDConnectProviderTagsCommandOutput> {
    return deserializeAws_queryListOpenIDConnectProviderTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
