import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { StartProjectSessionRequest, StartProjectSessionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartProjectSessionCommand,
  serializeAws_restJson1StartProjectSessionCommand,
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

export interface StartProjectSessionCommandInput extends StartProjectSessionRequest {}
export interface StartProjectSessionCommandOutput extends StartProjectSessionResponse, __MetadataBearer {}

/**
 * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
 *             project.</p>
 */
export class StartProjectSessionCommand extends $Command<
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartProjectSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartProjectSessionCommandInput, StartProjectSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "StartProjectSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartProjectSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartProjectSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartProjectSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartProjectSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartProjectSessionCommandOutput> {
    return deserializeAws_restJson1StartProjectSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
