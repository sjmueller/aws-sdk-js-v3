import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DetachCertificateFromDistributionRequest, DetachCertificateFromDistributionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DetachCertificateFromDistributionCommand,
  serializeAws_json1_1DetachCertificateFromDistributionCommand,
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

export type DetachCertificateFromDistributionCommandInput = DetachCertificateFromDistributionRequest;
export type DetachCertificateFromDistributionCommandOutput = DetachCertificateFromDistributionResult & __MetadataBearer;

/**
 * <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is detached, your distribution stops accepting traffic for all of
 *       the domains that are associated with the certificate.</p>
 */
export class DetachCertificateFromDistributionCommand extends $Command<
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachCertificateFromDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachCertificateFromDistributionCommandInput, DetachCertificateFromDistributionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DetachCertificateFromDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachCertificateFromDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachCertificateFromDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DetachCertificateFromDistributionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachCertificateFromDistributionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachCertificateFromDistributionCommandOutput> {
    return deserializeAws_json1_1DetachCertificateFromDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
