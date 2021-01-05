import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { DisassociateSkillFromUsersRequest, DisassociateSkillFromUsersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateSkillFromUsersCommand,
  serializeAws_json1_1DisassociateSkillFromUsersCommand,
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

export type DisassociateSkillFromUsersCommandInput = DisassociateSkillFromUsersRequest;
export type DisassociateSkillFromUsersCommandOutput = DisassociateSkillFromUsersResponse & __MetadataBearer;

/**
 * <p>Makes a private skill unavailable for enrolled users and prevents them from enabling it
 *          on their devices.</p>
 */
export class DisassociateSkillFromUsersCommand extends $Command<
  DisassociateSkillFromUsersCommandInput,
  DisassociateSkillFromUsersCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSkillFromUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateSkillFromUsersCommandInput, DisassociateSkillFromUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DisassociateSkillFromUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSkillFromUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSkillFromUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateSkillFromUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateSkillFromUsersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSkillFromUsersCommandOutput> {
    return deserializeAws_json1_1DisassociateSkillFromUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
