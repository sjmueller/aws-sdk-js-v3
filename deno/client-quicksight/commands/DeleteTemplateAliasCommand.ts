import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DeleteTemplateAliasRequest, DeleteTemplateAliasResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteTemplateAliasCommand,
  serializeAws_restJson1DeleteTemplateAliasCommand,
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

export interface DeleteTemplateAliasCommandInput extends DeleteTemplateAliasRequest {}
export interface DeleteTemplateAliasCommandOutput extends DeleteTemplateAliasResponse, __MetadataBearer {}

/**
 * <p>Deletes the item that the specified template alias points to. If you provide a specific
 * 			alias, you delete the version of the template that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTemplateAliasCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, DeleteTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteTemplateAliasCommand extends $Command<
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTemplateAliasCommandInput) {
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
  ): Handler<DeleteTemplateAliasCommandInput, DeleteTemplateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteTemplateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTemplateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTemplateAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTemplateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTemplateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTemplateAliasCommandOutput> {
    return deserializeAws_restJson1DeleteTemplateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
