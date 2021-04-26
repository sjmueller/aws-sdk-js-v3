import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient.ts";
import { CreateCustomRoutingEndpointGroupRequest, CreateCustomRoutingEndpointGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand,
  serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand,
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

export interface CreateCustomRoutingEndpointGroupCommandInput extends CreateCustomRoutingEndpointGroupRequest {}
export interface CreateCustomRoutingEndpointGroupCommandOutput
  extends CreateCustomRoutingEndpointGroupResponse,
    __MetadataBearer {}

/**
 * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
 * 		An endpoint group is a collection of endpoints in one AWS
 * 		Region. </p>
 */
export class CreateCustomRoutingEndpointGroupCommand extends $Command<
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomRoutingEndpointGroupCommandInput) {
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
  ): Handler<CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateCustomRoutingEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomRoutingEndpointGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomRoutingEndpointGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCustomRoutingEndpointGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomRoutingEndpointGroupCommandOutput> {
    return deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
