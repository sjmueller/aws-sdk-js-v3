import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient.ts";
import { CreateAccessRequest, CreateAccessResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateAccessCommand,
  serializeAws_json1_1CreateAccessCommand,
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

export interface CreateAccessCommandInput extends CreateAccessRequest {}
export interface CreateAccessCommandOutput extends CreateAccessResponse, __MetadataBearer {}

/**
 * <p>Used by administrators to choose which groups in the directory should have access to
 *       upload and download files over the enabled protocols using Amazon Web Services Transfer Family. For example, a
 *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
 *       the ability to transfer files to the server. An administrator can use
 *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
 *       ability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAccessCommand } from "../../client-transfer/mod.ts";
 * // const { TransferClient, CreateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessCommandInput} for command's `input` shape.
 * @see {@link CreateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAccessCommand extends $Command<
  CreateAccessCommandInput,
  CreateAccessCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessCommandInput) {
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
  ): Handler<CreateAccessCommandInput, CreateAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "CreateAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessCommandOutput> {
    return deserializeAws_json1_1CreateAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
