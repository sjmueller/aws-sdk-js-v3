import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import {
  DisassociateAwsAccountFromPartnerAccountRequest,
  DisassociateAwsAccountFromPartnerAccountResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand,
  serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand,
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

export type DisassociateAwsAccountFromPartnerAccountCommandInput = DisassociateAwsAccountFromPartnerAccountRequest;
export type DisassociateAwsAccountFromPartnerAccountCommandOutput = DisassociateAwsAccountFromPartnerAccountResponse &
  __MetadataBearer;

/**
 * <p>Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.</p>
 */
export class DisassociateAwsAccountFromPartnerAccountCommand extends $Command<
  DisassociateAwsAccountFromPartnerAccountCommandInput,
  DisassociateAwsAccountFromPartnerAccountCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateAwsAccountFromPartnerAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateAwsAccountFromPartnerAccountCommandInput,
    DisassociateAwsAccountFromPartnerAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateAwsAccountFromPartnerAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateAwsAccountFromPartnerAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateAwsAccountFromPartnerAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateAwsAccountFromPartnerAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
