import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListPolicyAttachmentsRequest, ListPolicyAttachmentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPolicyAttachmentsCommand,
  serializeAws_restJson1ListPolicyAttachmentsCommand,
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

export interface ListPolicyAttachmentsCommandInput extends ListPolicyAttachmentsRequest {}
export interface ListPolicyAttachmentsCommandOutput extends ListPolicyAttachmentsResponse, __MetadataBearer {}

/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListPolicyAttachmentsCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, ListPolicyAttachmentsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListPolicyAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPolicyAttachmentsCommand extends $Command<
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPolicyAttachmentsCommandInput) {
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
  ): Handler<ListPolicyAttachmentsCommandInput, ListPolicyAttachmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListPolicyAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPolicyAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyAttachmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPolicyAttachmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPolicyAttachmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPolicyAttachmentsCommandOutput> {
    return deserializeAws_restJson1ListPolicyAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
