import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient.ts";
import { GetExperimentRequest, GetExperimentResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetExperimentCommand,
  serializeAws_restJson1GetExperimentCommand,
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

export interface GetExperimentCommandInput extends GetExperimentRequest {}
export interface GetExperimentCommandOutput extends GetExperimentResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified experiment.</p>
 */
export class GetExperimentCommand extends $Command<
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
  FisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExperimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExperimentCommandInput, GetExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "GetExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExperimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExperimentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExperimentCommandOutput> {
    return deserializeAws_restJson1GetExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
