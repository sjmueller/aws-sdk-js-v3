import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { ListGroupMembershipsRequest, ListGroupMembershipsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListGroupMembershipsCommand,
  serializeAws_restJson1ListGroupMembershipsCommand,
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

export interface ListGroupMembershipsCommandInput extends ListGroupMembershipsRequest {}
export interface ListGroupMembershipsCommandOutput extends ListGroupMembershipsResponse, __MetadataBearer {}

/**
 * <p>Lists member users in a group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListGroupMembershipsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, ListGroupMembershipsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListGroupMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembershipsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGroupMembershipsCommand extends $Command<
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupMembershipsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupMembershipsCommandInput, ListGroupMembershipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListGroupMembershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGroupMembershipsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupMembershipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGroupMembershipsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupMembershipsCommandOutput> {
    return deserializeAws_restJson1ListGroupMembershipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
