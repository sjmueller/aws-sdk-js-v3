
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { RevokeSecurityGroupEgressRequest, RevokeSecurityGroupEgressResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2RevokeSecurityGroupEgressCommand,
  serializeAws_ec2RevokeSecurityGroupEgressCommand,
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

export type RevokeSecurityGroupEgressCommandInput = RevokeSecurityGroupEgressRequest;
export type RevokeSecurityGroupEgressCommandOutput = RevokeSecurityGroupEgressResult & __MetadataBearer;

export class RevokeSecurityGroupEgressCommand extends $Command<
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeSecurityGroupEgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RevokeSecurityGroupEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSecurityGroupEgressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeSecurityGroupEgressResult.filterSensitiveLog,
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

  private serialize(input: RevokeSecurityGroupEgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RevokeSecurityGroupEgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeSecurityGroupEgressCommandOutput> {
    return deserializeAws_ec2RevokeSecurityGroupEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
