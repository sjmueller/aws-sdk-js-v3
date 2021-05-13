import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { ListReceivedLicensesRequest, ListReceivedLicensesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListReceivedLicensesCommand,
  serializeAws_json1_1ListReceivedLicensesCommand,
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

export interface ListReceivedLicensesCommandInput extends ListReceivedLicensesRequest {}
export interface ListReceivedLicensesCommandOutput extends ListReceivedLicensesResponse, __MetadataBearer {}

/**
 * <p>Lists received licenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedLicensesCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, ListReceivedLicensesCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListReceivedLicensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceivedLicensesCommandInput} for command's `input` shape.
 * @see {@link ListReceivedLicensesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReceivedLicensesCommand extends $Command<
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReceivedLicensesCommandInput) {
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
  ): Handler<ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListReceivedLicensesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReceivedLicensesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReceivedLicensesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReceivedLicensesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReceivedLicensesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceivedLicensesCommandOutput> {
    return deserializeAws_json1_1ListReceivedLicensesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
