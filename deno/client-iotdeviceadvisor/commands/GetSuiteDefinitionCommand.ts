import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient.ts";
import { GetSuiteDefinitionRequest, GetSuiteDefinitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetSuiteDefinitionCommand,
  serializeAws_restJson1GetSuiteDefinitionCommand,
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

export type GetSuiteDefinitionCommandInput = GetSuiteDefinitionRequest;
export type GetSuiteDefinitionCommandOutput = GetSuiteDefinitionResponse & __MetadataBearer;

/**
 * <p>Gets information about a Device Advisor test suite.</p>
 */
export class GetSuiteDefinitionCommand extends $Command<
  GetSuiteDefinitionCommandInput,
  GetSuiteDefinitionCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSuiteDefinitionCommandInput) {
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
  ): Handler<GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "GetSuiteDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSuiteDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSuiteDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSuiteDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSuiteDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteDefinitionCommandOutput> {
    return deserializeAws_restJson1GetSuiteDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
