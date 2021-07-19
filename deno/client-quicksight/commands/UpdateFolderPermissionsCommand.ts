import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { UpdateFolderPermissionsRequest, UpdateFolderPermissionsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateFolderPermissionsCommand,
  serializeAws_restJson1UpdateFolderPermissionsCommand,
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

export interface UpdateFolderPermissionsCommandInput extends UpdateFolderPermissionsRequest {}
export interface UpdateFolderPermissionsCommandOutput extends UpdateFolderPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates permissions of a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateFolderPermissionsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, UpdateFolderPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateFolderPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFolderPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateFolderPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFolderPermissionsCommand extends $Command<
  UpdateFolderPermissionsCommandInput,
  UpdateFolderPermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFolderPermissionsCommandInput) {
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
  ): Handler<UpdateFolderPermissionsCommandInput, UpdateFolderPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateFolderPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFolderPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFolderPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFolderPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFolderPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFolderPermissionsCommandOutput> {
    return deserializeAws_restJson1UpdateFolderPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
