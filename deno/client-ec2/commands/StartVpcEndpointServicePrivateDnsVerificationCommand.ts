import process from "https://deno.land/std@0.79.0/node/process.ts";
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  StartVpcEndpointServicePrivateDnsVerificationRequest,
  StartVpcEndpointServicePrivateDnsVerificationResult,
} from "../models/models_5.ts";
import {
  deserializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand,
  serializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand,
} from "../protocols/Aws_ec2.ts";
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

export type StartVpcEndpointServicePrivateDnsVerificationCommandInput = StartVpcEndpointServicePrivateDnsVerificationRequest;
export type StartVpcEndpointServicePrivateDnsVerificationCommandOutput = StartVpcEndpointServicePrivateDnsVerificationResult &
  __MetadataBearer;

/**
 * <p>Initiates the verification process to prove that the service provider owns the private
 *             DNS name domain for the endpoint service.</p>
 *         <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p>
 *         <p>Before the service provider runs this command, they must add a record to the DNS server. For more information, see  <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html#add-dns-txt-record">Adding a TXT Record to Your Domain's DNS Server </a> in the <i>Amazon VPC User Guide</i>.</p>
 */
export class StartVpcEndpointServicePrivateDnsVerificationCommand extends $Command<
  StartVpcEndpointServicePrivateDnsVerificationCommandInput,
  StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartVpcEndpointServicePrivateDnsVerificationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    StartVpcEndpointServicePrivateDnsVerificationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StartVpcEndpointServicePrivateDnsVerificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartVpcEndpointServicePrivateDnsVerificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartVpcEndpointServicePrivateDnsVerificationResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartVpcEndpointServicePrivateDnsVerificationCommandOutput> {
    return deserializeAws_ec2StartVpcEndpointServicePrivateDnsVerificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
