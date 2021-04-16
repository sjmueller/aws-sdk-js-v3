import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryGetInstanceProfileCommand,
  serializeAws_queryGetInstanceProfileCommand,
} from "../protocols/Aws_query.ts";
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

export type GetInstanceProfileCommandInput = GetInstanceProfileRequest;
export type GetInstanceProfileCommandOutput = GetInstanceProfileResponse & __MetadataBearer;

/**
 * <p> Retrieves information about the specified instance profile, including the instance
 *             profile's path, GUID, ARN, and role. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 */
export class GetInstanceProfileCommand extends $Command<
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetInstanceProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceProfileCommandOutput> {
    return deserializeAws_queryGetInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
