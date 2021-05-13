import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListObjectChildrenRequest, ListObjectChildrenResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListObjectChildrenCommand,
  serializeAws_restJson1ListObjectChildrenCommand,
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

export interface ListObjectChildrenCommandInput extends ListObjectChildrenRequest {}
export interface ListObjectChildrenCommandOutput extends ListObjectChildrenResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of child objects that are associated with a given
 *       object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectChildrenCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, ListObjectChildrenCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectChildrenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectChildrenCommandInput} for command's `input` shape.
 * @see {@link ListObjectChildrenCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListObjectChildrenCommand extends $Command<
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListObjectChildrenCommandInput) {
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
  ): Handler<ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListObjectChildrenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListObjectChildrenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectChildrenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListObjectChildrenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListObjectChildrenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectChildrenCommandOutput> {
    return deserializeAws_restJson1ListObjectChildrenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
