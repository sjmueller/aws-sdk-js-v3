import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { UpdateSMBFileShareVisibilityInput, UpdateSMBFileShareVisibilityOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand,
  serializeAws_json1_1UpdateSMBFileShareVisibilityCommand,
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

export interface UpdateSMBFileShareVisibilityCommandInput extends UpdateSMBFileShareVisibilityInput {}
export interface UpdateSMBFileShareVisibilityCommandOutput
  extends UpdateSMBFileShareVisibilityOutput,
    __MetadataBearer {}

/**
 * <p>Controls whether the shares on an S3 File Gateway are visible in a net view or browse
 *          list. The operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } from "../../client-storage-gateway/mod.ts";
 * // const { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBFileShareVisibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBFileShareVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBFileShareVisibilityCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateSMBFileShareVisibilityCommand extends $Command<
  UpdateSMBFileShareVisibilityCommandInput,
  UpdateSMBFileShareVisibilityCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSMBFileShareVisibilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSMBFileShareVisibilityCommandInput, UpdateSMBFileShareVisibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSMBFileShareVisibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSMBFileShareVisibilityInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSMBFileShareVisibilityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSMBFileShareVisibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSMBFileShareVisibilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSMBFileShareVisibilityCommandOutput> {
    return deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
