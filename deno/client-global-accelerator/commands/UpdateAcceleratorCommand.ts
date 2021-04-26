import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient.ts";
import { UpdateAcceleratorRequest, UpdateAcceleratorResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateAcceleratorCommand,
  serializeAws_json1_1UpdateAcceleratorCommand,
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

export interface UpdateAcceleratorCommandInput extends UpdateAcceleratorRequest {}
export interface UpdateAcceleratorCommandOutput extends UpdateAcceleratorResponse, __MetadataBearer {}

/**
 * <p>Update an accelerator. </p>
 *
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 */
export class UpdateAcceleratorCommand extends $Command<
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAcceleratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAcceleratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAcceleratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAcceleratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAcceleratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAcceleratorCommandOutput> {
    return deserializeAws_json1_1UpdateAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
