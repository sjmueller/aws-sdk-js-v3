import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient.ts";
import { ListGroupsOlderThanOrderingIdRequest, ListGroupsOlderThanOrderingIdResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommand,
  serializeAws_json1_1ListGroupsOlderThanOrderingIdCommand,
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

export interface ListGroupsOlderThanOrderingIdCommandInput extends ListGroupsOlderThanOrderingIdRequest {}
export interface ListGroupsOlderThanOrderingIdCommandOutput
  extends ListGroupsOlderThanOrderingIdResponse,
    __MetadataBearer {}

/**
 * <p>Provides a list of groups that are mapped to users before a
 *             given ordering or timestamp identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListGroupsOlderThanOrderingIdCommand } from "../../client-kendra/mod.ts";
 * // const { KendraClient, ListGroupsOlderThanOrderingIdCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListGroupsOlderThanOrderingIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsOlderThanOrderingIdCommandInput} for command's `input` shape.
 * @see {@link ListGroupsOlderThanOrderingIdCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGroupsOlderThanOrderingIdCommand extends $Command<
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupsOlderThanOrderingIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupsOlderThanOrderingIdCommandInput, ListGroupsOlderThanOrderingIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListGroupsOlderThanOrderingIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupsOlderThanOrderingIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGroupsOlderThanOrderingIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupsOlderThanOrderingIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGroupsOlderThanOrderingIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGroupsOlderThanOrderingIdCommandOutput> {
    return deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
