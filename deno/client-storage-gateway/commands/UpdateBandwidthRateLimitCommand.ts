
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateBandwidthRateLimitCommand,
  serializeAws_json1_1UpdateBandwidthRateLimitCommand,
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

export type UpdateBandwidthRateLimitCommandInput = UpdateBandwidthRateLimitInput;
export type UpdateBandwidthRateLimitCommandOutput = UpdateBandwidthRateLimitOutput & __MetadataBearer;

export class UpdateBandwidthRateLimitCommand extends $Command<
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBandwidthRateLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBandwidthRateLimitCommandInput, UpdateBandwidthRateLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBandwidthRateLimitInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBandwidthRateLimitOutput.filterSensitiveLog,
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

  private serialize(input: UpdateBandwidthRateLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBandwidthRateLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBandwidthRateLimitCommandOutput> {
    return deserializeAws_json1_1UpdateBandwidthRateLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
