
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient.ts";
import { InviteAccountToOrganizationRequest, InviteAccountToOrganizationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1InviteAccountToOrganizationCommand,
  serializeAws_json1_1InviteAccountToOrganizationCommand,
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

export type InviteAccountToOrganizationCommandInput = InviteAccountToOrganizationRequest;
export type InviteAccountToOrganizationCommandOutput = InviteAccountToOrganizationResponse & __MetadataBearer;

export class InviteAccountToOrganizationCommand extends $Command<
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InviteAccountToOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: InviteAccountToOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InviteAccountToOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InviteAccountToOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InviteAccountToOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InviteAccountToOrganizationCommandOutput> {
    return deserializeAws_json1_1InviteAccountToOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
