import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient.ts";
import { DisassociateAdminAccountRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateAdminAccountCommand,
  serializeAws_json1_1DisassociateAdminAccountCommand,
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

export interface DisassociateAdminAccountCommandInput extends DisassociateAdminAccountRequest {}
export interface DisassociateAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates the account that has been set as the AWS Firewall Manager administrator
 *       account. To set a different account as the administrator account, you must submit an
 *         <code>AssociateAdminAccount</code> request.</p>
 */
export class DisassociateAdminAccountCommand extends $Command<
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "DisassociateAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateAdminAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateAdminAccountCommandOutput> {
    return deserializeAws_json1_1DisassociateAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
