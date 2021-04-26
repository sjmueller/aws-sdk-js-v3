import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import { DescribeFleetMetadataRequest, DescribeFleetMetadataResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeFleetMetadataCommand,
  serializeAws_restJson1DescribeFleetMetadataCommand,
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

export interface DescribeFleetMetadataCommandInput extends DescribeFleetMetadataRequest {}
export interface DescribeFleetMetadataCommandOutput extends DescribeFleetMetadataResponse, __MetadataBearer {}

/**
 * <p>Provides basic information for the specified fleet, excluding identity provider,
 *             networking, and device configuration details.</p>
 */
export class DescribeFleetMetadataCommand extends $Command<
  DescribeFleetMetadataCommandInput,
  DescribeFleetMetadataCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFleetMetadataCommandInput, DescribeFleetMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DescribeFleetMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFleetMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetMetadataCommandOutput> {
    return deserializeAws_restJson1DescribeFleetMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
