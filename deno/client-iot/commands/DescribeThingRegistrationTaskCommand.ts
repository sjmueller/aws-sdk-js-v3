import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeThingRegistrationTaskCommand,
  serializeAws_restJson1DescribeThingRegistrationTaskCommand,
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

export interface DescribeThingRegistrationTaskCommandInput extends DescribeThingRegistrationTaskRequest {}
export interface DescribeThingRegistrationTaskCommandOutput
  extends DescribeThingRegistrationTaskResponse,
    __MetadataBearer {}

/**
 * <p>Describes a bulk thing provisioning task.</p>
 */
export class DescribeThingRegistrationTaskCommand extends $Command<
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeThingRegistrationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeThingRegistrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeThingRegistrationTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeThingRegistrationTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeThingRegistrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeThingRegistrationTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeThingRegistrationTaskCommandOutput> {
    return deserializeAws_restJson1DescribeThingRegistrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
