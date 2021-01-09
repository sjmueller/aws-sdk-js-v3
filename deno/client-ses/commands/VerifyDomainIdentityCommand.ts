import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryVerifyDomainIdentityCommand,
  serializeAws_queryVerifyDomainIdentityCommand,
} from "../protocols/Aws_query.ts";
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

export type VerifyDomainIdentityCommandInput = VerifyDomainIdentityRequest;
export type VerifyDomainIdentityCommandOutput = VerifyDomainIdentityResponse & __MetadataBearer;

/**
 * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS
 *             Region and attempts to verify it. For more information about verifying domains, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email
 *                 Addresses and Domains</a> in the <i>Amazon SES Developer
 *             Guide.</i>
 *          </p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class VerifyDomainIdentityCommand extends $Command<
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
  SESClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyDomainIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyDomainIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyDomainIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifyDomainIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyDomainIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyDomainIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyDomainIdentityCommandOutput> {
    return deserializeAws_queryVerifyDomainIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
