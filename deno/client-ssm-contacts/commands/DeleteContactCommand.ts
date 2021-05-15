import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient.ts";
import { DeleteContactRequest, DeleteContactResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteContactCommand,
  serializeAws_json1_1DeleteContactCommand,
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

export interface DeleteContactCommandInput extends DeleteContactRequest {}
export interface DeleteContactCommandOutput extends DeleteContactResult, __MetadataBearer {}

/**
 * <p>To remove a contact from Incident Manager, you can delete the contact. Deleting a contact
 *          removes them from all escalation plans and related response plans. Deleting an escalation
 *          plan removes it from all related response plans. You will have to recreate the contact and
 *          its contact channels before you can use it again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactCommand } from "../../client-ssm-contacts/mod.ts";
 * // const { SSMContactsClient, DeleteContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeleteContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactCommandInput} for command's `input` shape.
 * @see {@link DeleteContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteContactCommand extends $Command<
  DeleteContactCommandInput,
  DeleteContactCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContactCommandInput, DeleteContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "DeleteContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteContactResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContactCommandOutput> {
    return deserializeAws_json1_1DeleteContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
