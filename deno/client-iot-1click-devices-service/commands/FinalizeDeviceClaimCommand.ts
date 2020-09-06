
import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient.ts";
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1FinalizeDeviceClaimCommand,
  serializeAws_restJson1FinalizeDeviceClaimCommand,
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

export type FinalizeDeviceClaimCommandInput = FinalizeDeviceClaimRequest;
export type FinalizeDeviceClaimCommandOutput = FinalizeDeviceClaimResponse & __MetadataBearer;

export class FinalizeDeviceClaimCommand extends $Command<
  FinalizeDeviceClaimCommandInput,
  FinalizeDeviceClaimCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FinalizeDeviceClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: FinalizeDeviceClaimRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FinalizeDeviceClaimResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FinalizeDeviceClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1FinalizeDeviceClaimCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FinalizeDeviceClaimCommandOutput> {
    return deserializeAws_restJson1FinalizeDeviceClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
