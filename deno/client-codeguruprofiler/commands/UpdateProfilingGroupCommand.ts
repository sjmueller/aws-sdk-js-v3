import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient.ts";
import { UpdateProfilingGroupRequest, UpdateProfilingGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateProfilingGroupCommand,
  serializeAws_restJson1UpdateProfilingGroupCommand,
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

export interface UpdateProfilingGroupCommandInput extends UpdateProfilingGroupRequest {}
export interface UpdateProfilingGroupCommandOutput extends UpdateProfilingGroupResponse, __MetadataBearer {}

/**
 * <p>Updates a profiling group.</p>
 */
export class UpdateProfilingGroupCommand extends $Command<
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProfilingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "UpdateProfilingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProfilingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProfilingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProfilingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateProfilingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfilingGroupCommandOutput> {
    return deserializeAws_restJson1UpdateProfilingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
