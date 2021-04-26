import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { GetLoginProfileRequest, GetLoginProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryGetLoginProfileCommand,
  serializeAws_queryGetLoginProfileCommand,
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

export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {}
export interface GetLoginProfileCommandOutput extends GetLoginProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves the user name and password creation date for the specified IAM user. If
 *             the user has not been assigned a password, the operation returns a 404
 *                 (<code>NoSuchEntity</code>) error.</p>
 */
export class GetLoginProfileCommand extends $Command<
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLoginProfileCommandInput) {
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
  ): Handler<GetLoginProfileCommandInput, GetLoginProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetLoginProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLoginProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLoginProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetLoginProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoginProfileCommandOutput> {
    return deserializeAws_queryGetLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
