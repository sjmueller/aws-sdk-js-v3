import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient.ts";
import { DisassociateTeamMemberRequest, DisassociateTeamMemberResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateTeamMemberCommand,
  serializeAws_json1_1DisassociateTeamMemberCommand,
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

export interface DisassociateTeamMemberCommandInput extends DisassociateTeamMemberRequest {}
export interface DisassociateTeamMemberCommandOutput extends DisassociateTeamMemberResult, __MetadataBearer {}

/**
 * <p>Removes a user from a project. Removing a user from a project also removes the IAM
 *       policies from that user that allowed access to the project and its resources. Disassociating a
 *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
 *       IAM.</p>
 */
export class DisassociateTeamMemberCommand extends $Command<
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTeamMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "DisassociateTeamMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTeamMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTeamMemberResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateTeamMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateTeamMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateTeamMemberCommandOutput> {
    return deserializeAws_json1_1DisassociateTeamMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
