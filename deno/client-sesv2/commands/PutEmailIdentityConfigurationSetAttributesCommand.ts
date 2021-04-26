import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import {
  PutEmailIdentityConfigurationSetAttributesRequest,
  PutEmailIdentityConfigurationSetAttributesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand,
  serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand,
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

export interface PutEmailIdentityConfigurationSetAttributesCommandInput
  extends PutEmailIdentityConfigurationSetAttributesRequest {}
export interface PutEmailIdentityConfigurationSetAttributesCommandOutput
  extends PutEmailIdentityConfigurationSetAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to associate a configuration set with an email identity.</p>
 */
export class PutEmailIdentityConfigurationSetAttributesCommand extends $Command<
  PutEmailIdentityConfigurationSetAttributesCommandInput,
  PutEmailIdentityConfigurationSetAttributesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEmailIdentityConfigurationSetAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutEmailIdentityConfigurationSetAttributesCommandInput,
    PutEmailIdentityConfigurationSetAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutEmailIdentityConfigurationSetAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityConfigurationSetAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityConfigurationSetAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityConfigurationSetAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
