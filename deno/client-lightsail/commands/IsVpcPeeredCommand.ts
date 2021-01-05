import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1IsVpcPeeredCommand,
  serializeAws_json1_1IsVpcPeeredCommand,
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

export type IsVpcPeeredCommandInput = IsVpcPeeredRequest;
export type IsVpcPeeredCommandOutput = IsVpcPeeredResult & __MetadataBearer;

/**
 * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
 */
export class IsVpcPeeredCommand extends $Command<
  IsVpcPeeredCommandInput,
  IsVpcPeeredCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IsVpcPeeredCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "IsVpcPeeredCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IsVpcPeeredRequest.filterSensitiveLog,
      outputFilterSensitiveLog: IsVpcPeeredResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IsVpcPeeredCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1IsVpcPeeredCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IsVpcPeeredCommandOutput> {
    return deserializeAws_json1_1IsVpcPeeredCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
