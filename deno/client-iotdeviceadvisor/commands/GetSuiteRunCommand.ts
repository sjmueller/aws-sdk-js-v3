import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient.ts";
import { GetSuiteRunRequest, GetSuiteRunResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetSuiteRunCommand,
  serializeAws_restJson1GetSuiteRunCommand,
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

export interface GetSuiteRunCommandInput extends GetSuiteRunRequest {}
export interface GetSuiteRunCommandOutput extends GetSuiteRunResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Device Advisor test suite run.</p>
 */
export class GetSuiteRunCommand extends $Command<
  GetSuiteRunCommandInput,
  GetSuiteRunCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSuiteRunCommandInput) {
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
  ): Handler<GetSuiteRunCommandInput, GetSuiteRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "GetSuiteRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSuiteRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSuiteRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSuiteRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSuiteRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteRunCommandOutput> {
    return deserializeAws_restJson1GetSuiteRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
