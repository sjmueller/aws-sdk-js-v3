import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient.ts";
import { CreateConnectorProfileRequest, CreateConnectorProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateConnectorProfileCommand,
  serializeAws_restJson1CreateConnectorProfileCommand,
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

export interface CreateConnectorProfileCommandInput extends CreateConnectorProfileRequest {}
export interface CreateConnectorProfileCommandOutput extends CreateConnectorProfileResponse, __MetadataBearer {}

/**
 * <p>
 *   Creates a new connector profile associated with your AWS account. There is a soft quota of 100 connector profiles per AWS account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel.
 * </p>
 */
export class CreateConnectorProfileCommand extends $Command<
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateConnectorProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectorProfileCommandInput, CreateConnectorProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "CreateConnectorProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectorProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectorProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectorProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConnectorProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectorProfileCommandOutput> {
    return deserializeAws_restJson1CreateConnectorProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
