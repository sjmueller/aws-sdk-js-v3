import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CheckoutBorrowLicenseCommand,
  serializeAws_json1_1CheckoutBorrowLicenseCommand,
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

export interface CheckoutBorrowLicenseCommandInput extends CheckoutBorrowLicenseRequest {}
export interface CheckoutBorrowLicenseCommandOutput extends CheckoutBorrowLicenseResponse, __MetadataBearer {}

/**
 * <p>Checks out the specified license for offline use.</p>
 */
export class CheckoutBorrowLicenseCommand extends $Command<
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckoutBorrowLicenseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CheckoutBorrowLicenseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckoutBorrowLicenseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CheckoutBorrowLicenseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckoutBorrowLicenseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckoutBorrowLicenseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckoutBorrowLicenseCommandOutput> {
    return deserializeAws_json1_1CheckoutBorrowLicenseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
