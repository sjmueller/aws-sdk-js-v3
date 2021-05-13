import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient.ts";
import { ListAssociatedStacksRequest, ListAssociatedStacksResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAssociatedStacksCommand,
  serializeAws_json1_1ListAssociatedStacksCommand,
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

export interface ListAssociatedStacksCommandInput extends ListAssociatedStacksRequest {}
export interface ListAssociatedStacksCommandOutput extends ListAssociatedStacksResult, __MetadataBearer {}

/**
 * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedStacksCommand } from "../../client-appstream/mod.ts";
 * // const { AppStreamClient, ListAssociatedStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ListAssociatedStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedStacksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAssociatedStacksCommand extends $Command<
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedStacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedStacksCommandInput, ListAssociatedStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "ListAssociatedStacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedStacksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedStacksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssociatedStacksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedStacksCommandOutput> {
    return deserializeAws_json1_1ListAssociatedStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
