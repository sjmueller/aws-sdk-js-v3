import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient.ts";
import { CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSuiteDefinitionCommand,
  serializeAws_restJson1CreateSuiteDefinitionCommand,
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

export interface CreateSuiteDefinitionCommandInput extends CreateSuiteDefinitionRequest {}
export interface CreateSuiteDefinitionCommandOutput extends CreateSuiteDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates a Device Advisor test suite.</p>
 */
export class CreateSuiteDefinitionCommand extends $Command<
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSuiteDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IotDeviceAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSuiteDefinitionCommandInput, CreateSuiteDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "CreateSuiteDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSuiteDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSuiteDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSuiteDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSuiteDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSuiteDefinitionCommandOutput> {
    return deserializeAws_restJson1CreateSuiteDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
