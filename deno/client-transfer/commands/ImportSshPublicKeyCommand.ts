import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient.ts";
import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ImportSshPublicKeyCommand,
  serializeAws_json1_1ImportSshPublicKeyCommand,
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

export interface ImportSshPublicKeyCommandInput extends ImportSshPublicKeyRequest {}
export interface ImportSshPublicKeyCommandOutput extends ImportSshPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
 *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
 *       identified by <code>ServerId</code>.</p>
 *
 *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
 *       the name of the <code>SshPublicKeyId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportSshPublicKeyCommand } from "../../client-transfer/mod.ts";
 * // const { TransferClient, ImportSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ImportSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link ImportSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ImportSshPublicKeyCommand extends $Command<
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportSshPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ImportSshPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportSshPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportSshPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportSshPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportSshPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSshPublicKeyCommandOutput> {
    return deserializeAws_json1_1ImportSshPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
