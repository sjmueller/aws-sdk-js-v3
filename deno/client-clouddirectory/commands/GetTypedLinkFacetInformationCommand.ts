import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { GetTypedLinkFacetInformationRequest, GetTypedLinkFacetInformationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetTypedLinkFacetInformationCommand,
  serializeAws_restJson1GetTypedLinkFacetInformationCommand,
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

export interface GetTypedLinkFacetInformationCommandInput extends GetTypedLinkFacetInformationRequest {}
export interface GetTypedLinkFacetInformationCommandOutput
  extends GetTypedLinkFacetInformationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetTypedLinkFacetInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTypedLinkFacetInformationCommandInput} for command's `input` shape.
 * @see {@link GetTypedLinkFacetInformationCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetTypedLinkFacetInformationCommand extends $Command<
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTypedLinkFacetInformationCommandInput) {
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
  ): Handler<GetTypedLinkFacetInformationCommandInput, GetTypedLinkFacetInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "GetTypedLinkFacetInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTypedLinkFacetInformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTypedLinkFacetInformationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTypedLinkFacetInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTypedLinkFacetInformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTypedLinkFacetInformationCommandOutput> {
    return deserializeAws_restJson1GetTypedLinkFacetInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
