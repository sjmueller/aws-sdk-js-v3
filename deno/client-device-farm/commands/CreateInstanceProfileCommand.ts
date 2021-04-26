import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { CreateInstanceProfileRequest, CreateInstanceProfileResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateInstanceProfileCommand,
  serializeAws_json1_1CreateInstanceProfileCommand,
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

export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileRequest {}
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResult, __MetadataBearer {}

/**
 * <p>Creates a profile that can be applied to one or more private fleet device
 *             instances.</p>
 */
export class CreateInstanceProfileCommand extends $Command<
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInstanceProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateInstanceProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceProfileCommandOutput> {
    return deserializeAws_json1_1CreateInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
