import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient.ts";
import { GetMinuteUsageRequest, GetMinuteUsageResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetMinuteUsageCommand,
  serializeAws_restJson1GetMinuteUsageCommand,
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

export interface GetMinuteUsageCommandInput extends GetMinuteUsageRequest {}
export interface GetMinuteUsageCommandOutput extends GetMinuteUsageResponse, __MetadataBearer {}

/**
 * <p>Returns the number of minutes used by account.</p>
 */
export class GetMinuteUsageCommand extends $Command<
  GetMinuteUsageCommandInput,
  GetMinuteUsageCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMinuteUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "GetMinuteUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMinuteUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMinuteUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMinuteUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMinuteUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMinuteUsageCommandOutput> {
    return deserializeAws_restJson1GetMinuteUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
