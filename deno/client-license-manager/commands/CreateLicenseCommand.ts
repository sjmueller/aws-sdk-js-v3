import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { CreateLicenseRequest, CreateLicenseResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateLicenseCommand,
  serializeAws_json1_1CreateLicenseCommand,
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

export interface CreateLicenseCommandInput extends CreateLicenseRequest {}
export interface CreateLicenseCommandOutput extends CreateLicenseResponse, __MetadataBearer {}

/**
 * <p>Creates a license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, CreateLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLicenseCommand extends $Command<
  CreateLicenseCommandInput,
  CreateLicenseCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLicenseCommandInput) {
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
  ): Handler<CreateLicenseCommandInput, CreateLicenseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateLicenseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLicenseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLicenseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLicenseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLicenseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLicenseCommandOutput> {
    return deserializeAws_json1_1CreateLicenseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
