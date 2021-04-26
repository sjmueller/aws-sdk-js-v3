import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { PublishRecipeRequest, PublishRecipeResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PublishRecipeCommand,
  serializeAws_restJson1PublishRecipeCommand,
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

export interface PublishRecipeCommandInput extends PublishRecipeRequest {}
export interface PublishRecipeCommandOutput extends PublishRecipeResponse, __MetadataBearer {}

/**
 * <p>Publishes a new version of a DataBrew recipe.</p>
 */
export class PublishRecipeCommand extends $Command<
  PublishRecipeCommandInput,
  PublishRecipeCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishRecipeCommandInput) {
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
  ): Handler<PublishRecipeCommandInput, PublishRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "PublishRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishRecipeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PublishRecipeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishRecipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishRecipeCommandOutput> {
    return deserializeAws_restJson1PublishRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
