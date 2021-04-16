import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient.ts";
import { ReplicationConfigurationTemplate, UpdateReplicationConfigurationTemplateRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand,
  serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand,
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

export type UpdateReplicationConfigurationTemplateCommandInput = UpdateReplicationConfigurationTemplateRequest;
export type UpdateReplicationConfigurationTemplateCommandOutput = ReplicationConfigurationTemplate & __MetadataBearer;

/**
 * <p>Updates multiple ReplicationConfigurationTemplates by ID.</p>
 */
export class UpdateReplicationConfigurationTemplateCommand extends $Command<
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateReplicationConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReplicationConfigurationTemplateCommandInput, UpdateReplicationConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "UpdateReplicationConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReplicationConfigurationTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReplicationConfigurationTemplate.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateReplicationConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateReplicationConfigurationTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
