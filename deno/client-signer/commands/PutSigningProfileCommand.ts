import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient.ts";
import { PutSigningProfileRequest, PutSigningProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutSigningProfileCommand,
  serializeAws_restJson1PutSigningProfileCommand,
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

export interface PutSigningProfileCommandInput extends PutSigningProfileRequest {}
export interface PutSigningProfileCommandOutput extends PutSigningProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
 * 			carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
 *          </p>
 */
export class PutSigningProfileCommand extends $Command<
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSigningProfileCommandInput) {
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
  ): Handler<PutSigningProfileCommandInput, PutSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "PutSigningProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSigningProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSigningProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSigningProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSigningProfileCommandOutput> {
    return deserializeAws_restJson1PutSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
