import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient.ts";
import { ListResourceSharePermissionsRequest, ListResourceSharePermissionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListResourceSharePermissionsCommand,
  serializeAws_restJson1ListResourceSharePermissionsCommand,
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

export interface ListResourceSharePermissionsCommandInput extends ListResourceSharePermissionsRequest {}
export interface ListResourceSharePermissionsCommandOutput
  extends ListResourceSharePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the AWS RAM permissions that are associated with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceSharePermissionsCommand } from "../../client-ram/mod.ts";
 * // const { RAMClient, ListResourceSharePermissionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListResourceSharePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceSharePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSharePermissionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListResourceSharePermissionsCommand extends $Command<
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourceSharePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceSharePermissionsCommandInput, ListResourceSharePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListResourceSharePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceSharePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourceSharePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceSharePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResourceSharePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourceSharePermissionsCommandOutput> {
    return deserializeAws_restJson1ListResourceSharePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
