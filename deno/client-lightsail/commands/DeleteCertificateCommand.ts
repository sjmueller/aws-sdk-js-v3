import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DeleteCertificateRequest, DeleteCertificateResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteCertificateCommand,
  serializeAws_json1_1DeleteCertificateCommand,
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

export interface DeleteCertificateCommandInput extends DeleteCertificateRequest {}
export interface DeleteCertificateCommandOutput extends DeleteCertificateResult, __MetadataBearer {}

/**
 * <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>Certificates that are currently attached to a distribution cannot be deleted. Use the
 *         <code>DetachCertificateFromDistribution</code> action to detach a certificate from a
 *       distribution.</p>
 */
export class DeleteCertificateCommand extends $Command<
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCertificateCommandInput) {
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
  ): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCertificateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCertificateCommandOutput> {
    return deserializeAws_json1_1DeleteCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
