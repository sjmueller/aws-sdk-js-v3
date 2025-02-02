import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { DescribeFargateProfileRequest, DescribeFargateProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeFargateProfileCommand,
  serializeAws_restJson1DescribeFargateProfileCommand,
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

export interface DescribeFargateProfileCommandInput extends DescribeFargateProfileRequest {}
export interface DescribeFargateProfileCommandOutput extends DescribeFargateProfileResponse, __MetadataBearer {}

/**
 * <p>Returns descriptive information about an Fargate profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeFargateProfileCommand } from "../../client-eks/mod.ts";
 * // const { EKSClient, DescribeFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFargateProfileCommand extends $Command<
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFargateProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFargateProfileCommandInput, DescribeFargateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeFargateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFargateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFargateProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFargateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFargateProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFargateProfileCommandOutput> {
    return deserializeAws_restJson1DescribeFargateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
