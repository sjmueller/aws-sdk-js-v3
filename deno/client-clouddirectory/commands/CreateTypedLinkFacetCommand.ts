import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { CreateTypedLinkFacetRequest, CreateTypedLinkFacetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateTypedLinkFacetCommand,
  serializeAws_restJson1CreateTypedLinkFacetCommand,
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

export interface CreateTypedLinkFacetCommandInput extends CreateTypedLinkFacetRequest {}
export interface CreateTypedLinkFacetCommandOutput extends CreateTypedLinkFacetResponse, __MetadataBearer {}

/**
 * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 */
export class CreateTypedLinkFacetCommand extends $Command<
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTypedLinkFacetCommandInput) {
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
  ): Handler<CreateTypedLinkFacetCommandInput, CreateTypedLinkFacetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "CreateTypedLinkFacetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTypedLinkFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTypedLinkFacetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTypedLinkFacetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTypedLinkFacetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTypedLinkFacetCommandOutput> {
    return deserializeAws_restJson1CreateTypedLinkFacetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
