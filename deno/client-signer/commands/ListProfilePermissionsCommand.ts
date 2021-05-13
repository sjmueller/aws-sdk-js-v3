import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient.ts";
import { ListProfilePermissionsRequest, ListProfilePermissionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListProfilePermissionsCommand,
  serializeAws_restJson1ListProfilePermissionsCommand,
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

export interface ListProfilePermissionsCommandInput extends ListProfilePermissionsRequest {}
export interface ListProfilePermissionsCommandOutput extends ListProfilePermissionsResponse, __MetadataBearer {}

/**
 * <p>Lists the cross-account permissions associated with a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListProfilePermissionsCommand } from "../../client-signer/mod.ts";
 * // const { SignerClient, ListProfilePermissionsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProfilePermissionsCommand extends $Command<
  ListProfilePermissionsCommandInput,
  ListProfilePermissionsCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProfilePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfilePermissionsCommandInput, ListProfilePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListProfilePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfilePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProfilePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProfilePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProfilePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfilePermissionsCommandOutput> {
    return deserializeAws_restJson1ListProfilePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
