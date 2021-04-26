import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { CreateDedicatedIpPoolRequest, CreateDedicatedIpPoolResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateDedicatedIpPoolCommand,
  serializeAws_restJson1CreateDedicatedIpPoolCommand,
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

export interface CreateDedicatedIpPoolCommandInput extends CreateDedicatedIpPoolRequest {}
export interface CreateDedicatedIpPoolCommandOutput extends CreateDedicatedIpPoolResponse, __MetadataBearer {}

/**
 * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 *             IP addresses that are associated with your AWS account. You can associate a pool with
 *             a configuration set. When you send an email that uses that configuration set, the
 *             message is sent from one of the addresses in the associated pool.</p>
 */
export class CreateDedicatedIpPoolCommand extends $Command<
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDedicatedIpPoolCommandInput) {
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
  ): Handler<CreateDedicatedIpPoolCommandInput, CreateDedicatedIpPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateDedicatedIpPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDedicatedIpPoolRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDedicatedIpPoolResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDedicatedIpPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDedicatedIpPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDedicatedIpPoolCommandOutput> {
    return deserializeAws_restJson1CreateDedicatedIpPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
