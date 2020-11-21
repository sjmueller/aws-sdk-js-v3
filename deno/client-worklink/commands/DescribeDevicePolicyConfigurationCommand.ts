
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import {
  DescribeDevicePolicyConfigurationRequest,
  DescribeDevicePolicyConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand,
  serializeAws_restJson1DescribeDevicePolicyConfigurationCommand,
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

export type DescribeDevicePolicyConfigurationCommandInput = DescribeDevicePolicyConfigurationRequest;
export type DescribeDevicePolicyConfigurationCommandOutput = DescribeDevicePolicyConfigurationResponse &
  __MetadataBearer;

export class DescribeDevicePolicyConfigurationCommand extends $Command<
  DescribeDevicePolicyConfigurationCommandInput,
  DescribeDevicePolicyConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDevicePolicyConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDevicePolicyConfigurationCommandInput, DescribeDevicePolicyConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DescribeDevicePolicyConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDevicePolicyConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDevicePolicyConfigurationResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDevicePolicyConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDevicePolicyConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDevicePolicyConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
