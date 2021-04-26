import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { UnarchiveFindingsRequest, UnarchiveFindingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UnarchiveFindingsCommand,
  serializeAws_restJson1UnarchiveFindingsCommand,
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

export interface UnarchiveFindingsCommandInput extends UnarchiveFindingsRequest {}
export interface UnarchiveFindingsCommandOutput extends UnarchiveFindingsResponse, __MetadataBearer {}

/**
 * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
 */
export class UnarchiveFindingsCommand extends $Command<
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnarchiveFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UnarchiveFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnarchiveFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnarchiveFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnarchiveFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnarchiveFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnarchiveFindingsCommandOutput> {
    return deserializeAws_restJson1UnarchiveFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
