import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import {
  ListFailuresForLicenseConfigurationOperationsRequest,
  ListFailuresForLicenseConfigurationOperationsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand,
  serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand,
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

export type ListFailuresForLicenseConfigurationOperationsCommandInput = ListFailuresForLicenseConfigurationOperationsRequest;
export type ListFailuresForLicenseConfigurationOperationsCommandOutput = ListFailuresForLicenseConfigurationOperationsResponse &
  __MetadataBearer;

/**
 * <p>Lists the license configuration operations that failed.</p>
 */
export class ListFailuresForLicenseConfigurationOperationsCommand extends $Command<
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFailuresForLicenseConfigurationOperationsCommandInput) {
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
  ): Handler<
    ListFailuresForLicenseConfigurationOperationsCommandInput,
    ListFailuresForLicenseConfigurationOperationsCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListFailuresForLicenseConfigurationOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFailuresForLicenseConfigurationOperationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFailuresForLicenseConfigurationOperationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFailuresForLicenseConfigurationOperationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> {
    return deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
